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




// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }