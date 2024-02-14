let hamburgerIcon = document.querySelector("#hamburger-icon");
let navIsOpen = false;
console.log("It worked")
hamburgerIcon.addEventListener("click", () => {
  navIsOpen = !navIsOpen;
  let navMenu = document.querySelector("#myTopnav");
  if (navIsOpen) {
    navMenu.className = "topnav responsive";
    hamburgerIcon.className = "active";
  }
  else {
    navMenu.className = "topnav";
    hamburgerIcon.className = "";
  }
});