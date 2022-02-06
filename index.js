// alert("Hey!");
let numberOfDrums = document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtML = this.innerHTML;
        makeSound(buttonInnerHtML);
    });
}    
    document.addEventListener("keypress",function(e){
        makeSound(e.key);
    });

function makeSound(key){
    switch(key) {
        case "1":
            let audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "2":
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
            case "3":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
            case "4":
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
            case "5":
            let audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
            break;
            case "6":
            let audio6 = new Audio("sounds/snare.mp3");
            audio6.play();
            break;
            case "7":
            let audio7 = new Audio("sounds/crash.mp3");
            audio7.play();
            break;
        }
}


