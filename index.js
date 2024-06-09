document.addEventListener("DOMContentLoaded", function () {
  // Constants
  const emailAddress = "juliebertine@gmail.com";
  const linkedinUrl =
    "https://www.linkedin.com/in/julie-bertine-%C3%B8yen-872b0a233/";

  // Email function
  function sendEmail() {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  }

  // Event listener assignment helper
  function addClickListener(elementId, handler) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener("click", handler);
    }
  }

  // Add email button event listeners
  addClickListener("footerEmail", sendEmail);
  addClickListener("headerMail", sendEmail);

  // LinkedIn function
  function openLinkedIn() {
    window.open(linkedinUrl, "_blank");
  }

  // Add LinkedIn button event listeners
  addClickListener("headerLi", openLinkedIn);
  addClickListener("footerLi", openLinkedIn);

  // Project link opener function
  function openProjectLive(url) {
    window.open(url, "_blank");
  }

  // Project URLs
  const projectLinks = {
    foodBlogImg: "https://fed1-exam-julieoyen.netlify.app/",
    agencyImg: "https://quizaholics.netlify.app/",
    scienceMuseumImg: "https://semester-project-1-julie-oyen.netlify.app/",
    foodBlogGithub: "https://github.com/julieoyen/FED1-exam-julieoyen",
    foodBlogLive: "https://fed1-exam-julieoyen.netlify.app/",
    agencyGithub: "https://github.com/julieoyen/quizaholics",
    agencyLive: "https://quizaholics.netlify.app/",
    scienceMuseumLive: "https://semester-project-1-julie-oyen.netlify.app/",
    scienceMuseumGithub: "https://github.com/julieoyen/semesterproject1",
  };

  // Add project event listeners
  for (const [elementId, url] of Object.entries(projectLinks)) {
    addClickListener(elementId, function () {
      openProjectLive(url);
    });
  }
});
