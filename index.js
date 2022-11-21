function info() {
    var x = document.getElementById("info");
    if (x.innerHTML === "Andrei&nbspGerasimov") {
      x.innerHTML = "Andrei Gerasimov is a graphic designer. He graduated from Moscow’s HSE Art & Design School in 2022.";
    } else {
      x.innerHTML = "Andrei&nbspGerasimov";
    }
  }