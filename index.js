function info() {
    var x = document.getElementById("website-title");
    if (x.innerHTML === "Andrei Gerasimov") {
      x.innerHTML = "Andrei Gerasimov is a graphic designer. He graduated from HSE Art and Design&nbspSchool.";
      x.style.whiteSpace = "normal";
    } else {
      x.innerHTML = "Andrei Gerasimov";
      x.style.whiteSpace = "nowrap";
    }
  }