 //  Маркер работающего javascript

function nojsreplace() {
  if (document.body.className == "no-js") {
    document.body.classList.remove("no-js");
  }
}

document.addEventListener("DOMContentLoaded", nojsreplace);


// открытие и закрытие меню
if ( (document.querySelector(".page-header") != null) &&
     (document.querySelector(".page-header__toggle") != null) ) {


    // переменные
    var page_header = document.querySelector(".page-header");
    var toogle = document.querySelector(".page-header__toggle");
    // меняем
    toogle.addEventListener("click", function(event) {
      // меняем класс
      page_header.classList.toggle("page-header--closed");
        });

}
