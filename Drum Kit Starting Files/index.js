// document.querySelector("button").addEventListener("click",handleButton);
// function handleButton(){
//     alert("hello mother Fucker");
// }


// Annonomous Function 
//for botton click in it
for(var i =0;i<document.querySelectorAll(".drum").length;i++){                            //IMP:- document.querySelectorAll(".drum")
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var t = this.innerHTML;
        makeSound(t);
        buttonAnimation(t);
        
    });
}

//for key board in sound
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


//function for the sound 
function makeSound(keyThatpress){

    switch (keyThatpress) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();               
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();               
           break; 

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();               
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();               
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();               
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();               
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();               
            break;
        
        default:
            var beep = new Audio('sounds/beep-03.mp3');
            beep.play();               
            break;
          
    }
}

function buttonAnimation(curKey){

    var activButton = document.querySelector("."+curKey);
    activButton.classList.add("pressed");

    setTimeout(function(){
        activButton.classList.remove("pressed");
    },100);
}

