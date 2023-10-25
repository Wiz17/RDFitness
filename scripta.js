var k = true;
var p = true;
var height = document.body.scrollHeight;
// console.log(window.location.hash);
window.addEventListener("scroll", function () {
  // counterScroll();
  var navbar = document.querySelector(".nav");
  var navContent = document.querySelectorAll(".nav-content-list-1");
  var scrollPosition = window.scrollY;
  // console.log(height);
  var changeColorPosition = 25; // Scroll position at which to change the color
  // console.log(scrollPosition);
  if (scrollPosition > changeColorPosition) {
    navbar.style.backgroundColor = "black"; // Change to the desired color
    // navContent.forEach(function (e){
    //   e.style.color = "white";
    // })
  } else {
    navbar.style.backgroundColor = "transparent"; // Change to the initial color
    //   navContent.forEach(function (e){
    //     e.style.color = "black";
    //   })
  }
  
  var sectionElement = document.getElementById("counterid");
  if (isElementInViewport(sectionElement)&&k) {
    // The section is in the viewport.
    k=false;
    console.log("Section is in the viewport");
    counterEffect(targetNumber, interval);
    counterEffect2(targetNumber2, interval2);
    counterEffect3(targetNumber3, interval3);
  } else {
    // The section is not in the viewport.
    console.log("Section is not in the viewport");
  }
});
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if the top and bottom of the element are within the viewport
    var isVerticalInView = (rect.top <= windowHeight) && (rect.bottom >= 0);

    // Check if the left and right of the element are within the viewport
    var isHorizontalInView = (rect.left <= windowWidth) && (rect.right >= 0);

    return isVerticalInView && isHorizontalInView;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

///////trainers count////////////////////////////
function counterEffect(targetNumber, interval) {
  let currentNumber = 1500;
  const counterInterval = setInterval(() => {
    document.getElementById("trainers-ct").textContent = currentNumber;
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber = 2018; // Replace with your desired target number
const interval = 1; // 2000 milliseconds = 2 seconds

///////area  count////////////////////////////

function counterEffect2(targetNumber, interval) {
  let currentNumber = 2500;
  const counterInterval = setInterval(() => {
    document.getElementById("area-ct").textContent = currentNumber + "+";
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber2 = 3000; // Replace with your desired target number
const interval2 = 1; // 2000 milliseconds = 2 seconds

///////clients  count////////////////////////////

function counterEffect3(targetNumber, interval) {
  let currentNumber = 200;
  const counterInterval = setInterval(() => {
    document.getElementById("clients-ct").textContent = currentNumber + "+";
    // console.log(currentNumber);
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}

const targetNumber3 = 500; // Replace with your desired target number
const interval3 = 5; // 2000 milliseconds = 2 seconds
window.addEventListener("load", function () {
  // Website has finished loading, hide the loading overlay
  var loadingOverlay = document.getElementById("loading");
  var web = (document.getElementById("web").style.display = "");
  loadingOverlay.style.display = "none";
  // console.log("loading....");
});
