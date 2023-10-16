function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  window.addEventListener("load", function () {
    // Website has finished loading, hide the loading overlay
    var loadingOverlay = document.getElementById("loading");
    var web = (document.getElementById("web").style.display = ""); 
    loadingOverlay.style.display = "none";
    console.log("loading....");
  });

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav");
    var navContent = document.querySelectorAll(".nav-content-list-1");
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    var changeColorPosition = 50; // Scroll position at which to change the color
    console.log(navContent);
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
    // if (scrollPosition >= 650) {
    //   this.document.querySelectorAll(".load").forEach(function (f) {
    //     f.classList.remove("header-text-op-0");
    //   });
    //   this.document.querySelectorAll(".load").forEach(function (f) {
    //     f.classList.add("header-text-op-1");
    //   });
    // }
  });