document.addEventListener("DOMContentLoaded", function () {
  // Email Buttons
  const emailAddress = "juliebertine@gmail.com";
  const subject = "";
  const body = "";

  function sendEmail() {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  const footerEmailButton = document.getElementById("footerEmail");
  const headerEmailButton = document.getElementById("headerMail");

  footerEmailButton.addEventListener("click", sendEmail);
  headerEmailButton.addEventListener("click", sendEmail);

  // LinkedIn Buttons
  const linkedinUrl =
    "https://www.linkedin.com/in/julie-bertine-%C3%B8yen-872b0a233/";

  function openLinkedIn() {
    window.open(linkedinUrl, "_blank");
  }

  const headerLiButton = document.getElementById("headerLi");
  const footerLiButton = document.getElementById("footerLi");

  headerLiButton.addEventListener("click", openLinkedIn);
  footerLiButton.addEventListener("click", openLinkedIn);

  // Project Images
  function openProjectLive(url) {
    window.open(url, "_blank");
  }

  const foodBlogImg = document.getElementById("foodBlogImg");
  const agencyImg = document.getElementById("agencyImg");
  const scienceMuseumImg = document.getElementById("scienceMuseumImg");

  foodBlogImg.addEventListener("click", function () {
    openProjectLive("https://fed1-exam-julieoyen.netlify.app/");
  });

  agencyImg.addEventListener("click", function () {
    openProjectLive("https://quizaholics.netlify.app/");
  });

  scienceMuseumImg.addEventListener("click", function () {
    openProjectLive("https://semester-project-1-julie-oyen.netlify.app/");
  });

  // GitHub and Live Buttons
  document
    .getElementById("foodBlogGithub")
    .addEventListener("click", function () {
      window.open("https://github.com/julieoyen/FED1-exam-julieoyen", "_blank");
    });

  document
    .getElementById("foodBlogLive")
    .addEventListener("click", function () {
      window.open("https://fed1-exam-julieoyen.netlify.app/", "_blank");
    });

  document
    .getElementById("agencyGithub")
    .addEventListener("click", function () {
      window.open("https://github.com/julieoyen/quizaholics", "_blank");
    });

  document.getElementById("agencyLive").addEventListener("click", function () {
    window.open("https://quizaholics.netlify.app/", "_blank");
  });

  document
    .getElementById("scienceMuseumLive")
    .addEventListener("click", function () {
      window.open(
        "https://semester-project-1-julie-oyen.netlify.app/",
        "_blank"
      );
    });

  document
    .getElementById("scienceMuseumGithub")
    .addEventListener("click", function () {
      window.open("https://github.com/julieoyen/CA-js1-Julie-Oyen", "_blank");
    });

  // Sticky Header
  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});
