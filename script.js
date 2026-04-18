// Functions to dynamically populate content
function populateProfile() {
  document.querySelector("img").src = profileImage;
  document.querySelector("h1").textContent = fullName;

  const contactContent = `${contactInfo}
  <br>
  <a href="mailto:${email}">${email}</a> 
  <br>
   <a href="https://wa.me/${phone.replace(/\D/g, "")}?text=Hello%20Mahmoud">${phone}</a>  
  <br>
   <a href="${linkedin}" target="_blank">LinkedIn</a>   `;

  document.querySelector("p").innerHTML = contactContent;
}

function populateSummary() {
  const summaryContent = `${professionalSummary}`;

  document.querySelector(".summary").innerHTML = summaryContent;
}

function populateSkills() {
  const skillsContainer = document.querySelector(".skills");
  technicalSkills.forEach((skill) => {
    const skillElement = document.createElement("p");
    const skillLinks = skill.skills
      .map(
        (s) => `  <span class="m-1 p-1 rounded bg-white border border-gray-300 text-xs">
                      <a href="${s.link}" target="_blank">${s.label}</a>
                   </span>`,
      )
      .join("");
    skillElement.innerHTML = `
      <div class="mt-2 flex flex-row items-center gap-2">
        <p>${skill.category}</p>
        <span class="flex flex-wrap gap-2">${skillLinks}</span>
       </div>`;
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
    experienceContainer.appendChild(document.createElement("br"));
  });
}

function populateProjects() {
  const projectsContainer = document.querySelector(".projects");
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    if (project.link) {
      projectElement.innerHTML = `<a href="${project.link}" target="_blank"><strong>${project.name}:</strong></a> ${project.description}`;
    } else {
      projectElement.innerHTML = `<strong>${project.name}:</strong> <br/> ${project.description}`;
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

document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "cv.pdf";
  link.download = "Mahmoud_Abdulbari_Karsha_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
// Populate all sections
populateProfile();
populateSummary();
populateSkills();
populateEducation();
populateLanguages();
populateExperience();
populateProjects();
populateCertificates();
