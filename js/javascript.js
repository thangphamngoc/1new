function myFunction() {
  var x = document.getElementById("my-top-nav");
  if (x.className === "menu-right") {
    x.className += " responsive";
  } else {
    x.className = "menu-right";
  }
}

function ftFunction(){
	var y = document.getElementById("myfooter");
	if (y.className === "footer") {
    y.className += " responsive";
  } else {
    y.className = "footer";
  }
}

function openNav() {
  document.getElementById("my-side-nav").style.width = "40%";
}

function closeNav() {
  document.getElementById("my-side-nav").style.width = "0";
}