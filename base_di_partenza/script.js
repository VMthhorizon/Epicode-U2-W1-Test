window.addEventListener("scroll", () => {
  const headerNav = document.getElementById("nav-section");
  const navBtn = document.getElementById("green-btn");
  const headerHeight = document.querySelector("header").offsetHeight;
  const headerHeightPercentage = (headerHeight * 70) / 100;
  const scrollPosition = window.scrollY;
  if (scrollPosition > headerHeightPercentage) {
    headerNav.classList.add("nav-scroll");
    navBtn.classList.add("nav-btn-scroll");
  } else {
    headerNav.classList.remove("nav-scroll");
    navBtn.classList.remove("nav-btn-scroll");
  }
});

setInterval(() => {
  const m = document.getElementsByTagName("g");
  const randNum = Math.floor(Math.random() * m.length);
  const randIndex = m[randNum];
  randIndex.classList.add("letter-opacity");
  setTimeout(() => {
    randIndex.classList.remove("letter-opacity");
  }, 1500);
}, 50);
