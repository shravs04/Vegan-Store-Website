var sideBar = document.getElementById("sidebar");
var sidebarBtn = document.getElementById("sidebar-btn");
var layer = document.getElementById("layer");


sidebarBtn.onclick = function() {
  sideBar.style.display = "inline-block";
  layer.style.display = "inline-block";
}

layer.onclick = function() {
  layer.style.display = "none";
  sideBar.style.display = "none";
}