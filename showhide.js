function showhide(el) {
    var x = document.getElementById(el);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }