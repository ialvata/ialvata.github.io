function top_nav_fill() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " "+"responsive";
    } else {
      x.className = "topnav";
    }
  }