function myFunction() {
  var x = document.getElementById("myTopnav");
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