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

document.getElementById("buton").addEventListener("click",function(){
    let email=document.getElementById("email").value;
    let parola=document.getElementById("password").value;
    let conf=document.getElementById("confirm").value;
    let name=document.getElementById("username").value;

    let ok=0;
    var re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(re)){
        window.alert("email invalid!");
    }
    else{
        if(conf!==parola){
            window.alert("confirmare parola invalida!");
        }
        else{
            fetch(`http://localhost:4008/users/${name}`)
            .then(res => res.json())
            .then(data => {
            if(data.length!==0){
                console.log(data)
                window.alert("Username-ul exista deja!")
            }
            else{
                window.alert("Inregistrare efectuata!")
                if(email && parola && username) {
                    const body = {
                        username: name,
                        email: email,
                        password: parola
                    }
                    fetch("http://localhost:4008/users/", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Accept': 'application/json'
        
                        },
                        body: JSON.stringify(body)
                    })
                    .then(res => {
                        document.getElementById("username").value="";
                        document.getElementById("email").value = "";
                        document.getElementById("password").value = "";
                        document.getElementById("confirm").value="";
                    })
                    .catch(err => console.warn(err))
                }
                window.location.href='file:///D:/SC/facultate/2.%20sem2/TW/proiect/Cont.html';
                passvalues();
            }
        })
        .catch(err => console.warn(err))
        }
    }

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