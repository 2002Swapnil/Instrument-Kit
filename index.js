document.querySelector('.set').addEventListener('click', (e) => {
    if(e.target.classList.contains('drum'))
        makeSound(e.target.dataset.no);
});

document.addEventListener("keypress", (e) => {
    if(e && e.key >= "1" && e.key <= "7") makeSound(e.key);
});

const makeSound = (n) => new Audio(`sounds/tom-${n}.mp3`).play(); 