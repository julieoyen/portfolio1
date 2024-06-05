document
  .getElementById("foodBlogGithub")
  .addEventListener("click", function () {
    window.open("https://github.com/julieoyen/FED1-exam-julieoyen", "_blank");
  });

document.getElementById("foodBlogLive").addEventListener("click", function () {
  window.open("https://fed1-exam-julieoyen.netlify.app/", "_blank");
});

document.getElementById("agencyGithub").addEventListener("click", function () {
  window.open("https://github.com/julieoyen/quizaholics", "_blank");
});

document.getElementById("agencyLive").addEventListener("click", function () {
  window.open("https://quizaholics.netlify.app/", "_blank");
});

document
  .getElementById("scienceMuseumLive")
  .addEventListener("click", function () {
    window.open("https://semester-project-1-julie-oyen.netlify.app/", "_blank");
  });

document
  .getElementById("scienceMuseumGithub")
  .addEventListener("click", function () {
    window.open("https://github.com/julieoyen/CA-js1-Julie-Oyen", "_blank");
  });

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
