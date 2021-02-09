document.getElementById("btn-send-msg").onclick = function(){
    let name = document.getElementById("name");
    let phone = document.getElementById("cellphone");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name.value != "" && phone.value != "" && email.value != "" && message.value != null){
        alert("Recibiremos el siguiente correo electrónico"+
        "\n\nNombre: " + name.value
        + "\nTeléfono: " + phone.value
        + "\nCorreo:" + email.value
        + "\nMessage: " + message.value);
    }else{
        alert("The form is not fill correctly. Please, try again.")
    }
}

document.getElementById("btn-IG").onclick = function(){    
    window.open("https://www.instagram.com/dinalbanavas");
}


var skill=[
    {"name":"JAVA","level":"90%"},
    {"name":"HTML","level":"60%"},
    {"name":"CSS","level":"50%"},
    {"name":"JavaScript","level":"30%"},
    {"name":"English","level":"70%"},
    {"name":"Excel","level":"80%"},  
];

window.addEventListener("load",function(e){
    document.getElementById("bar1").style.width =skill[0].level;
    document.getElementById("bar2").style.width =skill[1].level;
    document.getElementById("bar3").style.width =skill[2].level;
    document.getElementById("bar4").style.width =skill[3].level;
    document.getElementById("bar5").style.width =skill[4].level;
    document.getElementById("bar6").style.width =skill[5].level;
});

