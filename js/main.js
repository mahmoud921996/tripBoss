const navbar = document.getElementsByClassName("navbar")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    navbar.classList.add("navbar-cng");
  } else navbar.classList.remove("navbar-cng");
});

const navbarCollapse = document.getElementById("navbar-collapse");
const navShowBtn = document.getElementById("navbar-show-btn");
const navCloseBtn = document.getElementById("navbar-close-btn");

navShowBtn.addEventListener("click", function () {
  navbarCollapse.classList.add("navbar-collapse-new");
});

navCloseBtn.addEventListener("click", function () {
  navbarCollapse.classList.remove("navbar-collapse-new");
});

// if someone press in any place the menu will be close
document.addEventListener("click", (e) => {
  if (
    e.target.id != "navbar-collapse" &&
    e.target.id != "navbar-show-btn" &&
    e.target.parentElement.id != "navbar-show-btn"
  ) {
    navbarCollapse.classList.remove("navbar-collapse-new");
  }
});

// video play && pause

const video = document.querySelector(".video-wrapper video");
const playBtn = document.getElementById("play-btn");
if (playBtn) {
  playBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
