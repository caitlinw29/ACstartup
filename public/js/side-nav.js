// let dropdownButtons = document.querySelectorAll(".dropbtn");
// dropdownButtons.forEach((btn) => btn.addEventListener("click", function (e) {
//   e.currentTarget.nextElementSibling.classList.toggle("show");
// }));

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function checkSize(x) {
  if (x.matches) {
    // If media query matches
    // Show sidenav on side swipe for phones
    document
      .querySelector("#content")
      .addEventListener("touchstart", startTouch, { passive: true });
    document
      .querySelector("#content")
      .addEventListener("touchmove", moveTouch, { passive: true });
    window.onclick = function (event) {
      if (!event.target.matches("#sidebar")) {
        closeNav();
        document.body.style.overflow = "visible";
      }
    };
  } else {
    window.onclick = function (event) {
      if (event.target.matches("#menu-icon")) {
        openNav();
        removeMenu();
      } else if (!event.target.matches("#sidebar")) {
        closeNav();
        showMenu();
      }
    };
  }
}

//checking size of screen to decide how side nav will operate
var x = window.matchMedia("(max-width: 500px)");
checkSize(x); // Call listener function at run time
x.addEventListener("change", checkSize); // Attach listener function on state changes

//menu button functions (show/hide)
function removeMenu() {
  document.querySelector("#menu-icon").style.display = "none";
}
function showMenu() {
  document.querySelector("#menu-icon").style.display = "inline-block";
}

/* Functions to open the nav and close the nav - small is for mobile*/
function openNav() {
  document.getElementById("sidebar").style.width = "100px";
  document.getElementById("content").style.marginLeft = "100px";
}
function openNavSmall() {
  document.getElementById("sidebar").style.width = "75px";
  document.getElementById("content").style.marginLeft = "75px";
}
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("content").style.marginLeft = "0";
}

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      closeNav();
      document.body.style.overflow = "visible";
    } else {
      // swiped right
      openNavSmall();
      document.body.style.overflow = "hidden";
    }
  }
  // } else {
  //   // // sliding vertically
  //   // if (diffY > 0) {
  //   //   // swiped up
  //   //   console.log("swiped up");
  //   // } else {
  //   //   // swiped down
  //   //   console.log("swiped down");
  //   // }
  // }

  initialX = null;
  initialY = null;

  e.preventDefault();
}



//when user clicks home button, redirect to home
document.querySelector("#homeNav").addEventListener("click", function(){
  document.location.replace("/home");
})