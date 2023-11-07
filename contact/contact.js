var FormContact = document.querySelector('.FormContact');
console.log(FormContact);

var nomComplet = document.getElementById("nomComplet");
console.log(nomComplet);

var addresEmail = document.getElementById("addresEmail");
console.log(addresEmail);

var message = document.getElementById("message");
console.log(message);

var boutContact = document.getElementById("boutContact");
console.log(boutContact);


FormContact.addEventListener("submit", (event) => {
    event.preventDefault();
    // alert("Please")

    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // nom complet
    if (nomComplet.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre nom complet SVP...",
        });
    }else if (addresEmail.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre adresse email SVP...",
        });
    }else if (!addresEmail.value.match(regexEmail)) {
        Swal.fire({
            icon: "error",
            title: "Attention",
            text: "Entrer un email SVP...",
        });
    }else if (message === "") {
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre message SVP...",
        });
    }else{
        Swal.fire({
            icon: "success",
            title: "Bien",
            text: "Message envoyé avec succés...",
        });
    }
    
})



var burger = document.querySelector(".burger");
console.log(burger);

var close = document.getElementById("close");
console.log(close);

var dropMenu = document.getElementById("dropMenu");
console.log(dropMenu);

burger.addEventListener("click", () => {
    dropMenu.style.left = "0";
    dropMenu.style.transition = "2s ease";
});

close.addEventListener("click", () => {
    dropMenu.style.left = "-100%";
    dropMenu.style.transition = "2s ease";
});

