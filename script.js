// Renders the page from the data defined in content.js

const icons = {
  location:
    '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:
    '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/>',
  external: '<path d="M7 17L17 7M9 7h8v8"/>',
};

function icon(name, size = 15) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function isRealLink(link) {
  return Boolean(link) && link !== "#";
}

function populateProfile() {
  const avatar = document.getElementById("avatar");
  avatar.src = profileImage;
  document.getElementById("name").textContent = fullName;

  const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}?text=Hello%20Mahmoud`;
  document.getElementById("contact").innerHTML = `
    <li>${icon("location")}${escapeHtml(contactInfo)}<img class="flag" src="flag-kurdistan.svg" alt="Flag of Kurdistan" width="21" height="14" /></li>
    <li>${icon("email")}<a href="mailto:${email}">${escapeHtml(email)}</a></li>
    <li>${icon("phone")}<a href="${whatsapp}" target="_blank" rel="noopener">${escapeHtml(phone)}</a></li>
    <li>${icon("linkedin")}<a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
  `;
}

function populateSummary() {
  document.getElementById("summary").textContent = professionalSummary;
}

function populateExperience() {
  const container = document.getElementById("experience");
  container.innerHTML = professionalExperience
    .map((job) => {
      // Titles look like "Role - Company (Location)"
      const [role, ...rest] = job.title.split(" - ");
      const org = rest.join(" - ").replace(/^\((.*)\)$/, "$1");
      return `
        <article class="job">
          <div class="job-head">
            <h3>${escapeHtml(role)}</h3>
            <span class="date">${escapeHtml(job.duration)}</span>
          </div>
          ${org ? `<p class="org">${escapeHtml(org)}</p>` : ""}
          <ul>${job.responsibilities.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
        </article>`;
    })
    .join("");
}

const skillLevels = ["Basic", "Intermediate", "Proficient", "Advanced", "Expert"];

function populateSkills() {
  const container = document.getElementById("skills");
  container.innerHTML = technicalSkills
    .map((group, i) => {
      const rows = group.skills
        .map((s) => {
          const level = Math.min(Math.max(Number(s.level) || 3, 1), 5);
          const levelName = skillLevels[level - 1];
          const name = isRealLink(s.link)
            ? `<a href="${s.link}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`
            : escapeHtml(s.label);
          return `
            <li class="skill">
              <div class="skill-row">
                <span class="skill-name">${name}</span>
                <span class="skill-level">${levelName}</span>
              </div>
              <div class="bar" role="meter" aria-label="${escapeHtml(s.label)}" aria-valuemin="1" aria-valuemax="5" aria-valuenow="${level}" aria-valuetext="${levelName}">
                <span style="width:${level * 20}%"></span>
              </div>
            </li>`;
        })
        .join("");
      return `
        <article class="skill-card" style="--skill-color: var(--c${(i % 8) + 1})">
          <h3>${escapeHtml(group.category)}</h3>
          <ul>${rows}</ul>
        </article>`;
    })
    .join("");
}

function populateProjects() {
  const container = document.getElementById("projects");
  container.innerHTML = projects
    .map((project) => {
      const body = `
        <h3>${escapeHtml(project.name)}${project.link ? icon("external", 16) : ""}</h3>
        <p>${escapeHtml(project.description)}</p>`;
      return project.link
        ? `<a class="card" href="${project.link}" target="_blank" rel="noopener">${body}</a>`
        : `<div class="card">${body}</div>`;
    })
    .join("");
}

function populateEducation() {
  // Format: "Degree - Institution (Year)"
  const [degree, ...rest] = education.split(" - ");
  const details = rest.join(" - ");
  // Link the institution name (text before the year) when a link is set
  const match = details.match(/^(.*?)(\s*\(.*\))?$/);
  const institution = isRealLink(typeof educationLink === "undefined" ? "" : educationLink)
    ? `<a href="${educationLink}" target="_blank" rel="noopener">${escapeHtml(match[1])}</a>${escapeHtml(match[2] || "")}`
    : escapeHtml(details);
  document.getElementById("education").innerHTML = `
    <div class="edu">
      <h3>${escapeHtml(degree)}</h3>
      ${details ? `<p>${institution}</p>` : ""}
    </div>`;
}

// Proficiency shown as a bar; unknown wording falls back to a mid value
const languageLevels = { native: 100, fluent: 85, "very good": 70, good: 55, intermediate: 40, basic: 25 };

function populateLanguages() {
  document.getElementById("languages").innerHTML = languages
    .map((entry) => {
      const [name, level = ""] = entry.split(":").map((s) => s.trim());
      const percent = languageLevels[level.toLowerCase()] ?? 50;
      return `
        <li class="lang">
          <span class="lang-name">${escapeHtml(name)}</span>
          <div class="bar" role="meter" aria-label="${escapeHtml(name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}" aria-valuetext="${escapeHtml(level)}">
            <span style="width:${percent}%"></span>
          </div>
          <span class="lang-level">${escapeHtml(level)}</span>
        </li>`;
    })
    .join("");
}

function issuerOf(link) {
  try {
    const host = new URL(link).hostname.replace(/^www\./, "").split(".")[0];
    return host.charAt(0).toUpperCase() + host.slice(1);
  } catch {
    return "";
  }
}

function populateCertificates() {
  document.getElementById("certificates").innerHTML = certificates
    .map(({ label, link }) => {
      const real = isRealLink(link);
      const issuer = real ? issuerOf(link) : "";
      const body = `
        ${issuer ? `<span class="cert-issuer">${escapeHtml(issuer)}</span>` : ""}
        <span class="cert-title">${escapeHtml(label)}${real ? icon("external", 15) : ""}</span>`;
      return real
        ? `<li><a class="cert" href="${link}" target="_blank" rel="noopener">${body}</a></li>`
        : `<li><div class="cert">${body}</div></li>`;
    })
    .join("");
}

populateProfile();
populateSummary();
populateExperience();
populateSkills();
populateProjects();
populateEducation();
populateLanguages();
populateCertificates();
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: explicit choice is stored; otherwise follows the OS setting
(function setupThemeToggle() {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : media.matches);
  const sync = () => {
    button.setAttribute("aria-pressed", String(isDark()));
    button.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
  };
  button.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    sync();
  });
  media.addEventListener("change", sync);
  sync();
})();

// Highlight the nav link of the section currently in view
(function setupActiveNav() {
  const links = new Map(
    [...document.querySelectorAll(".nav-links a")].map((a) => [a.getAttribute("href").slice(1), a]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.remove("active"));
        links.get(entry.target.id)?.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document.querySelectorAll(".hero, .section").forEach((section) => observer.observe(section));
})();

// Mouse effects: section-tinted spotlight + card border glow.
// Only for mouse/trackpad users who haven't asked for reduced motion.
(function setupMouseEffects() {
  const ok = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
  if (!ok.matches) return;

  const root = document.documentElement;
  const spotlight = document.querySelector(".spotlight");
  const cards = [...document.querySelectorAll(".skill-card, .card")];
  root.classList.add("mouse-fx");

  let x = 0;
  let y = 0;
  let target = null;
  let frame = 0;

  function update() {
    frame = 0;
    spotlight.style.setProperty("--mx", `${x}px`);
    spotlight.style.setProperty("--my", `${y}px`);

    target = document.elementFromPoint(x, y) || target; // stays correct while scrolling
    const section = target?.closest(".section, .hero");
    const color = section && getComputedStyle(section).getPropertyValue("--sec").trim();
    spotlight.style.setProperty("--spot", color || getComputedStyle(root).getPropertyValue("--c1").trim());

    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${x - rect.left}px`);
      card.style.setProperty("--gy", `${y - rect.top}px`);
    }
  }

  document.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    x = e.clientX;
    y = e.clientY;
    target = e.target;
    spotlight.classList.add("on");
    if (!frame) frame = requestAnimationFrame(update);
  });

  document.documentElement.addEventListener("pointerleave", () => spotlight.classList.remove("on"));
  window.addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(update);
  }, { passive: true });
})();
