let red = document.querySelector('.esq1')
let yellow = document.querySelector('.esq2')
let blue = document.querySelector('.esq3')
let green = document.querySelector('.esq4')
const startButton = document.querySelector('.start')
const msgGameOver = document.querySelector('.gameOverContainer')
let roundsNumber = document.querySelector('.roundsNumber')
let roundContainer = document.querySelector('.roundContainer')
let container = document.querySelector('.container')

let queue = [];
let selectable = [];
let allColor = [red, yellow, blue, green]
let time;
let ran;
let rounds = 1;
let o = 0;

startButton.classList.add('unhide')
msgGameOver.classList.add('hide')
roundContainer.classList.add('hide')

//Game starts when clicking in the button 'Empezar'
startButton.addEventListener('click', () => {
    // debugger
    o = 0;
    container.classList.remove('cover')
    startButton.classList.remove('unhide')
    startButton.classList.add('hide')
    roundContainer.classList.add('unhide')

    //Choose the random color in the first time
    ran = allColor[Math.floor(Math.random() * 4)]
    queue.push(ran)
    // console.log(ran)

    time = setTimeout(turnOnOf, 400, 'add', ran);

    setTimeout(turnOnOf, 700, 'remove', ran)
    console.log(queue)

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
})

function myfuntion(pressedColor) {
    // debugger;
    console.log('Color presionado', pressedColor)
    console.log(queue)
    selectable.push(pressedColor)
    console.log(selectable)
    debugger;
    // for (let i in queue) {
    if (selectable[o].classList[1] == queue[o].classList[1]) {
        if (selectable.length == queue.length) {
            console.log('---------------------------------------')
            ran = allColor[Math.floor(Math.random() * 4)]
            console.table([{ NuevoValor: ran }]);
            queue.push(ran)
            // console.log(queue)
            selectable = [];
            roundsNumber.innerText++;
            o = 0
            turnLights();
            // rounds++;
            // console.log(rounds)
        } else {
            console.log('Dale otra vez');
            console.log(selectable);
            o++
            // console.log(parseInt(roundsNumber.innerText)-1)
            // break;
        }
    } else {
        console.log('La secuecia no es igual, perdiste')
        showGameOverbtn()
    }
    // }
}
function turnOnOf(p, q) {
    if (q.classList.contains('esq1')) {
        q.classList[p]("hoverRed")

    } else if (q.classList.contains('esq2')) {
        q.classList[p]("hoverYellow")

    } else if (q.classList.contains('esq3')) {
        q.classList[p]("hoverBlue")

    } else {
        q.classList[p]("hoverGreen")
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function turnLights() {
    for (let i = 0; i < queue.length; i++) {
        let time = setTimeout(turnOnOf, 400, 'add', queue[i]);
        setTimeout(turnOnOf, 700, 'remove', queue[i])
        // console.log(`Iteración ${i}`);
        container.classList.add('cover')

        await esperar(1000); // espera 1 segundo antes de la siguiente
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
    queue = []
    selectable = []
}