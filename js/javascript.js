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

// function openNav() {
//   document.getElementById("js-my-side").style= "right: 0px";
// }

// function closeNav() {
//   document.getElementById("js-my-side").style= "right: -200px";
// }

function openNav() {
  document.getElementById("js-my-side").style= "right:0px";
  document.getElementById("js-my-bot").style= "display:block";
 }
 function closeNav() {
  document.getElementById("js-my-bot").style= "display:none";
  document.getElementById("js-my-side").style= "right: -250px";
 }
