document.getElementsByClassName("aut")[0].addEventListener("mouseover",Hover);
document.getElementsByClassName("aut")[0].addEventListener("mouseout",Out);

function Hover(){
    document.getElementsByClassName("aut")[0].style.background="darksalmon";
    document.getElementsByClassName("aut")[0].style.transition=".3s";
}

function Out(){
    document.getElementsByClassName("aut")[0].style.background="transparent";
    document.getElementsByClassName("aut")[0].style.transition="0s";
}
document.getElementsByClassName("inr")[0].addEventListener("mouseover",Hover1);
document.getElementsByClassName("inr")[0].addEventListener("mouseout",Out1);

function Hover1(){
    document.getElementsByClassName("inr")[0].style.background="darksalmon";
    document.getElementsByClassName("inr")[0].style.transition=".3s";
}

function Out1(){
    document.getElementsByClassName("inr")[0].style.background="transparent";
    document.getElementsByClassName("inr")[0].style.transition="0s";
}

function passvalues(){
    let name=document.getElementById("username").value;
    localStorage.setItem("username", name);
    return false;
}

let ok=0;
document.getElementById("buton").addEventListener("click",function(){
    let parola=document.getElementById("password").value;
    let name=document.getElementById("username").value;
    let email=document.getElementById("email").value;

    fetch(`http://localhost:4008/users/${name}/${parola}`)
    .then(res => res.json())
    .then(data => {
        if(data.length===0){
            window.alert("Date incorecte!")
        }
        else{
            window.location.href='file:///D:/SC/facultate/2.%20sem2/TW/proiect/Cont.html';

        }
    })
    .catch(err => console.warn(err))

    passvalues();

});   



document.getElementById("buton").addEventListener("mouseover", function(){
    document.getElementById("buton").style.border="2px solid black";
    document.getElementById("buton").style.backgroundColor="rgb(216, 124, 93)";
})

document.getElementById("buton").addEventListener("mouseout", function(){
    document.getElementById("buton").style.border="1px solid darksalmon";
    document.getElementById("buton").style.backgroundColor="darksalmon";
})

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
