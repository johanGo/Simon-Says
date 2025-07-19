let red = document.querySelector('.esq1')
let yellow = document.querySelector('.esq2')
let blue = document.querySelector('.esq3')
let green = document.querySelector('.esq4')
const startButton = document.querySelector('.start')
const msgGameOver = document.querySelector('.gameOverContainer')
let roundsNumber = document.querySelector('.roundsNumber')
let roundContainer = document.querySelector('.roundContainer')
let container = document.querySelector('.container')

const soundTopLeft = uploadSound("1.mp3"),
    soundTopRight = uploadSound("2.mp3"),
    soundBottomLeft = uploadSound("3.mp3"),
    soundBottomRight = uploadSound("4.mp3");

let queue = [];
let selectable = [];
let allColor = [red, yellow, blue, green]
// let time;
let ran;
let rounds = 1;
let o = 0;

startButton.classList.add('unhide')
msgGameOver.classList.add('hide')
roundContainer.classList.add('hide')
container.classList.add('cover')

//Game starts when clicking in the button 'Empezar'
startButton.addEventListener('click', () => {
    // debugger
    o = 0;
    // container.classList.remove('cover')
    startButton.classList.remove('unhide')
    startButton.classList.add('hide')
    roundContainer.classList.add('unhide')

    //Choose the random color in the first time
    ran = allColor[Math.floor(Math.random() * 4)]
    queue.push(ran)
    // console.log(ran)

    // time = setTimeout(turnOnOf, 400, 'add', ran);
    setTimeout(turnOnOf, 400, 'add', ran, '300', true);
    setTimeout(turnOnOf, 700, 'remove', ran, '0', false)
    setTimeout(() => container.classList.remove('cover'), 900)
    // console.log(queue)
})

function myfuntion(pressedColor) {
    setTimeout(turnOnOf, 0, 'add', pressedColor, '300', true);
    setTimeout(turnOnOf, 100, 'remove', pressedColor, '0', false);
    // console.log('Color presionado', pressedColor)
    // console.log(queue)
    selectable.push(pressedColor)
    // console.log(selectable)
    // debugger;
    if (selectable[o].classList[1] == queue[o].classList[1]) {
        if (selectable.length == queue.length) {
            // console.log('---------------------------------------')
            ran = allColor[Math.floor(Math.random() * 4)]
            // console.table([{ NuevoValor: ran }]);
            queue.push(ran)
            selectable = [];
            roundsNumber.innerText++;
            o = 0
            turnLights();
        } else {
            console.log('Dale otra vez');
            console.log(selectable);
            o++
        }
    } else {
        console.log('La secuecia no es igual, perdiste')
        cleanArrays()
        showGameOverbtn()
    }
}
function turnOnOf(p, q, r, t) {
    if (q.classList.contains('esq1')) {
        q.style.zIndex = r;
        q.classList[p]("hoverRed");
        if (t) {
            soundTopLeft.play();
        }
    } else if (q.classList.contains('esq2')) {
        q.style.zIndex = r;
        q.classList[p]("hoverYellow");
        if (t) {
            soundTopRight.play();
        }
    } else if (q.classList.contains('esq3')) {
        q.style.zIndex = r;
        q.classList[p]("hoverBlue");
        if (t) {
            soundBottomLeft.play();
        }
    } else {
        q.style.zIndex = r;
        q.classList[p]("hoverGreen");
        if (t) {
            soundBottomRight.play();
        }
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function turnLights() {

    for (let i = 0; i < queue.length; i++) {
        // let time = setTimeout(turnOnOf, 400, 'add', queue[i]);
        // debugger;
        // await esperar(300); // espera 1 segundo antes de la siguiente
        if (i == 0) {
            console.log('suu')
            await esperar(500); // espera 1 segundo antes de la siguiente
            console.log('nuu')
        }
        // else{
        //     console.log('sigue')
        //     continue;
        // }

        setTimeout(turnOnOf, 400, 'add', queue[i], '300', true);
        setTimeout(turnOnOf, 700, 'remove', queue[i], '0', false);

        // console.log(`Iteración ${i}`);
        container.classList.add('cover')

        await esperar(800); // espera 1 segundo antes de la siguiente
    }
    // console.log("Tu turno");
    container.classList.remove('cover')
}
function showGameOverbtn() {
    container.classList.add('cover')
    msgGameOver.classList.add('unhide')
    msgGameOver.addEventListener('click', () => {
        msgGameOver.classList.remove('unhide')
        msgGameOver.classList.add('hide')
        startButton.classList.remove('hide')
        startButton.classList.add('unhide')
        roundContainer.classList.remove('unhide')
        roundContainer.classList.add('hide')
        startButton.style.zIndex = '200'
        // debugger;
        rounds = 1
        roundsNumber.innerText = 1
    })
    // queue = []
    // selectable = []
}
function cleanArrays() {
    queue = []
    selectable = []
}

red.addEventListener('click', () => {

    myfuntion(red);
})
yellow.addEventListener('click', () => {
    myfuntion(yellow);
})
blue.addEventListener('click', () => {
    myfuntion(blue);
})
green.addEventListener('click', () => {
    myfuntion(green);
})

function uploadSound(fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none";
    document.body.appendChild(sonido);
    return sonido;
}
