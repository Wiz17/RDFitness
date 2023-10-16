function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var k=true;
  var p=true;
  var height=document.body.scrollHeight;
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav");
    var navContent = document.querySelectorAll(".nav-content-list-1");
    var scrollPosition = window.scrollY;
    console.log(height);
    var changeColorPosition = 25; // Scroll position at which to change the color
    console.log(scrollPosition);
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
    
    if (scrollPosition >= 1021 && k &&height<2900) {
      k=false;
      console.log('K exec');
      counterEffect(targetNumber, interval);
      counterEffect2(targetNumber2, interval2);
      counterEffect3(targetNumber3, interval3);
    }
    if (scrollPosition >= 1950 && p  && height>=2900) {
      p=false;
      console.log('p exec');
      counterEffect(targetNumber, interval);
      counterEffect2(targetNumber2, interval2);
      counterEffect3(targetNumber3, interval3);
    }
  });
  window.addEventListener("load", function () {
    // Website has finished loading, hide the loading overlay
    var loadingOverlay = document.getElementById("loading");
    var web = (document.getElementById("web").style.display = ""); 
    loadingOverlay.style.display = "none";
    console.log("loading....");
  });