
// KISA YÖNTEM
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.div-button button').forEach(button => {
        button.addEventListener('click', function () {
            playSound(button.id);
        });
    });
});

function playSound(buttonId) {
    let sound = document.querySelector(`#${buttonId}`);
    sound.play();
}

/* UZUN YÖNTEM 
function clickA(){
    let sound = document.querySelector('#buttonA');
    sound.play();
}

function clickB(){
    let sound = document.querySelector('#buttonB');
    sound.play();
}

function clickC(){
    let sound = document.querySelector('#buttonC');
    sound.play();
}

function clickD(){
    let sound = document.querySelector('#buttonD');
    sound.play();
}

function clickE(){
    let sound = document.querySelector('#buttonE');
    sound.play();
}

function clickF(){
    let sound = document.querySelector('#buttonF');
    sound.play();
}

function clickG(){
    let sound = document.querySelector('#buttonG');
    sound.play();
}

function clickH(){
    let sound = document.querySelector('#buttonH');
    sound.play();
}

function clickI(){
    let sound = document.querySelector('#buttonI');
    sound.play();
}
*/

