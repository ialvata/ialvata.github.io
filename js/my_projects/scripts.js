
function top_nav_fill() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " "+"responsive";
    } else {
      x.className = "topnav";
    }
  }
// All these open_* functions, and their use, need to be refactored
function open_time_series(){
    window.open("https://github.com/ialvata/Time_Series");
}

function open_nlp(){
    window.open("https://github.com/ialvata/NLP");
}

function open_api_dev(){
    window.open("https://github.com/ialvata/Python-API-Development");
}

function open_mlflow_exploration(){
  window.open("https://github.com/ialvata/mlflow_exploration");
}

function open_podcast_project(){
  window.open("https://github.com/ialvata/podcast_project");
}

function filterSelection(c) {
  // var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") {
    c = "column";
  };
  for (let i of x) {
    class_name_array = i.className.split(" ");
    console.log(class_name_array.includes(c));
    if (class_name_array.includes(c)){
      class_name_array.push("show");
      i.className = class_name_array.join(" ");
    }else{
      class_name_array = class_name_array.filter(function (arr_el) {
          return arr_el != "show";
      });
      i.className = class_name_array.join(" ");
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  filterSelection("all"); // so that when the page loads, there's no empty space...
  // Add active class to the current button (highlight it)
  btnContainer = document.getElementById("myBtnContainer");
  buttons_gallery = btnContainer.getElementsByClassName("button_gallery");
  for (let i of buttons_gallery) {
    i.addEventListener("click", function(event){
      current = document.getElementsByClassName("button_gallery_active")[0];
      current.className = current.className.replace(" button_gallery_active", "");
      event.target.className += " button_gallery_active";
    });
  };
});