// var burger = document.querySelector(".burger");
// console.log(burger);

// var close = document.getElementById("close");
// console.log(close);

// var dropMenu = document.getElementById("dropMenu");
// console.log(dropMenu);

// burger.addEventListener("click", () => {
//     dropMenu.style.left = "0";
//     dropMenu.style.transition = "2s ease";
// });

// close.addEventListener("click", () => {
//     dropMenu.style.left = "-100%";
//     dropMenu.style.transition = "2s ease";
// });


// Sweet alert
var formulaire = document.querySelector("form");
// console.log(formulaire);

const email = document.getElementById("email");
// console.log(email);

var btnFooter = document.getElementById("btnFooter");
// console.log(btnFooter);

btnFooter.addEventListener("click", (e) => {
    e.preventDefault();

    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value === "") {
        // alert('Please enter email address');
        Swal.fire({
            icon: "error",
            title: "Oh non",
            text: "Renseigner votre addresse email SVP...",
        });
    } else if (!email.value.match(regexEmail)) {
        // alert('Please enter a valid email');
        Swal.fire({
            icon: "error",
            title: "Attention",
            text: "Vérifier votre addresse email SVP...",
        });
    } else {
        // alert('email already');
        Swal.fire({
            icon: "success",
            title: "Bien, Bravo",
            text: "Vous etes abonné à notre newsletter",
        });
    }
});
