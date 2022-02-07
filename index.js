document.querySelector('.set').addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('drum')){
        makeSound(target.dataset.no);
    }
});

document.addEventListener("keypress", (e) => {
    if(e && e.key >= "1" && e.key <= "7"){ 
        Animation(e.key);
        makeSound(e.key);
    };
});

const makeSound = (n) => new Audio(`sounds/tom-${n}.mp3`).play(); 


function Animation(key){
    var activebtn = document.querySelector(`button[data-no="${key}"]`);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },200);
}