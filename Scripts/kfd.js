/* Mobile/small screen navbar */

var clicked = false
function toggleNav() {
  var tabls = document.getElementsByClassName('tabl');
  if (!clicked) {
    clicked = true;
    for (var i=0; i<tabls.length; i++) {
      tabls[i].style.display = 'block';
    }
  }
  else {
    clicked = false;
    for (var i=0; i<tabls.length; i++) {
      tabls[i].style.display = 'none';
    }
  }
}

/* Allows all tabs to be accessible via one page */

function openPage(pageName, elmnt, loc) {
  // Hide all elements with class="tab-content" by default
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tabl");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }

  // Show the desired tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "silver";
  elmnt.style.color = "#224";

  // Scrolls (up then) down to the content
  document.getElementById('KFD').scrollIntoView({block: "nearest", inline: "nearest", behavior: "smooth"})
  document.getElementById(loc).scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})

  if (clicked)
    toggleNav();
}
openPage('home', this, 'home-h1');

/* Implements accordion for OFS page */

accs = document.getElementsByClassName("acc-panel")

function activateAcc(acc) {
  accs = document.getElementsByClassName("acc-panel")

  for (var i=0; i<accs.length; i++) {
    if (accs[i].id == acc) {
      if (accs[i].style.display != "block") {
        accs[i].style.display = "block"
      }
      else {
        accs[i].style.display = "none"
      }
    }
  }
}

/* Slideshow */

var slides = document.querySelectorAll('#slideshow-bob .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide visible-slide';
}

// Set up default states in the site

for (var i=0; i<accs.length; i++) {
  accs[i].style.display = "none";
}

var tabs = document.getElementsByClassName('tab-content');
for (var i=0; i<tabs.length; i++){
  tabs[i].style.display = 'none';
}