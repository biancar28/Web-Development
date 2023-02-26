document.getElementById("user").innerHTML=localStorage.getItem("username");

document.getElementById("adresa").addEventListener("click", ShowMap);
document.getElementById("adresa").addEventListener("mouseover", Hover);
document.getElementById("adresa").addEventListener("mouseout", Out);

function ShowMap(){
  document.getElementById("map").style.display="contents";

}

function Hover(){
    document.getElementById("adresa").style.color="#10101a";
}
function Out(){
    document.getElementById("adresa").style.color="#7e8094";
}

const div=document.createElement("div");
