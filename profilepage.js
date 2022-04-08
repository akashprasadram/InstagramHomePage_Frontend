var tags = document.getElementsByClassName("tag");
for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
