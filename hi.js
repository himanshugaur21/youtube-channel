/* Function to toggle the navigation menu */
function toggleMenu() {
    var nav = document.getElementById("main-nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }
  
  /* Add event listener to the menu button */
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", toggleMenu);
  