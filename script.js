// Functions to dynamically populate content
function populateProfile() {
  document.querySelector("img").src = profileImage;
  document.querySelector("h1").textContent = fullName;
  document.querySelector("p").textContent = contactInfo;
}

function populateSummary() {
  document.querySelector(".summary").textContent = professionalSummary;
}

function populateSkills() {
  const skillsContainer = document.querySelector(".skills");
  technicalSkills.forEach((skill) => {
    const skillElement = document.createElement("p");
    skillElement.innerHTML = `<strong>${skill.category}:</strong> ${skill.skills}`;
    skillsContainer.appendChild(skillElement);
  });
}

function populateEducation() {
  document.querySelector(".education").textContent = education;
}

function populateLanguages() {
  const languagesContainer = document.querySelector(".languages");
  languages.forEach((language) => {
    const languageElement = document.createElement("li");
    languageElement.textContent = language;
    languagesContainer.appendChild(languageElement);
  });
}

function populateExperience() {
  const experienceContainer = document.querySelector(".experience");
  professionalExperience.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.innerHTML = `
      <p class="font-bold">${job.title} | ${job.duration}</p>
      <ul class="list-disc ml-5 text-sm mt-1 space-y-1">
        ${job.responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join("")}
      </ul>
    `;
    experienceContainer.appendChild(jobElement);
  });
}

function populateProjects() {
  const projectsContainer = document.querySelector(".projects");
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    if (project.link) {
      projectElement.innerHTML = `<a href="${project.link}" target="_blank"><strong>${project.name}:</strong></a> ${project.description}`;
    } else {
      projectElement.innerHTML = `<strong>${project.name}:</strong> ${project.description}`;
    }
    projectsContainer.appendChild(projectElement);
  });
}

function populateCertificates() {
  const certificatesContainer = document.querySelector(".certificates");
  certificates.forEach((certificate) => {
    const { label, link } = certificate;
    const certificateElement = document.createElement("li");
    if (link) {
      certificateElement.innerHTML = `<a href="${link}" target="_blank">${label}</a>`;
    } else {
      certificateElement.textContent = label;
    }
    certificatesContainer.appendChild(certificateElement);
  });
}

// Populate all sections
populateProfile();
populateSummary();
populateSkills();
populateEducation();
populateLanguages();
populateExperience();
populateProjects();
populateCertificates();
