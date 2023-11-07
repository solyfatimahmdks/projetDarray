var burger = document.querySelector('.burger');
console.log(burger);

var close = document.getElementById('close');
console.log(close);

var dropMenu = document.getElementById('dropMenu');
console.log(dropMenu);

burger.addEventListener('click', () => {
    dropMenu.style.left = '0';
    dropMenu.style.transition = '2s ease';
})

close.addEventListener("click", () => {
    dropMenu.style.left = "-100%";
    dropMenu.style.transition = "2s ease";
});