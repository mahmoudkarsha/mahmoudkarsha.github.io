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
    <li>${icon("location")}${escapeHtml(contactInfo)}</li>
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

function populateSkills() {
  const container = document.getElementById("skills");
  container.innerHTML = technicalSkills
    .map((group) => {
      const tags = group.skills
        .map((s) =>
          isRealLink(s.link)
            ? `<a class="tag" href="${s.link}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`
            : `<span class="tag">${escapeHtml(s.label)}</span>`,
        )
        .join("");
      return `<dt>${escapeHtml(group.category)}</dt><dd>${tags}</dd>`;
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
  document.getElementById("education").innerHTML = `
    <div class="edu">
      <h3>${escapeHtml(degree)}</h3>
      ${rest.length ? `<p>${escapeHtml(rest.join(" - "))}</p>` : ""}
    </div>`;
}

function populateLanguages() {
  document.getElementById("languages").innerHTML = languages
    .map((entry) => {
      const [name, level] = entry.split(":").map((s) => s.trim());
      return `<li><span>${escapeHtml(name)}</span>${level ? `<span class="level">${escapeHtml(level)}</span>` : ""}</li>`;
    })
    .join("");
}

function populateCertificates() {
  document.getElementById("certificates").innerHTML = certificates
    .map(({ label, link }) =>
      isRealLink(link)
        ? `<li><a href="${link}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`
        : `<li>${escapeHtml(label)}</li>`,
    )
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
