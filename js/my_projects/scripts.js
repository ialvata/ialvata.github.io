function top_nav_fill() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " "+"responsive";
    } else {
      x.className = "topnav";
    }
  }

function open_time_series(){
    window.open("https://github.com/ialvata/Time_Series");
}

function open_nlp(){
    window.open("https://github.com/ialvata/NLP");
}

function open_api_dev(){
    window.open("https://github.com/ialvata/Python-API-Development");
}