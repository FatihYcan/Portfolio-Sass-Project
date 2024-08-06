const hamburgerMenu = document.querySelector(".fa-bars");

hamburgerMenu.addEventListener("click", () => {
  const headerLinks = document.querySelector(".header__links");
  headerLinks.classList.toggle("show");
});
