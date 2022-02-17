function responsiveNav(){
  var x = document.getElementById("myTopnav");
  if(x.className === "topnav"){
    x.className += " responsive";
    x.style.height = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
  }
  else{
    x.className = "topnav";
    x.style.height = "50px";
    document.body.style.backgroundColor = "#272727";
  }
}