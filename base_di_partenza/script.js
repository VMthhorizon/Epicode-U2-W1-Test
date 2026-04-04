const headerNav = document.getElementById("nav-section");
const navBtn = document.getElementById("green-btn");
window.addEventListener("scroll", () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;
  const scrolled = (scrollPosition / height) * 100;
  console.log(scrolled);
  if (scrolled > 22) {
    headerNav.classList.add("nav-scroll");
    navBtn.classList.add("nav-btn-scroll");
  } else {
    headerNav.classList.remove("nav-scroll");
    navBtn.classList.remove("nav-btn-scroll");
  }
});
