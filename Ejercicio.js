// let red=document.getElementsByClassName('esq1')
let red = document.querySelector('.esq1')
let yellow = document.querySelector('.esq2')
let blue = document.querySelector('.esq3')
let green = document.querySelector('.esq4')
const startButton = document.querySelector('.start')
let queue = [];
let selectable = [];
let allColor = [red, yellow, blue, green]
let time;
let ran;
let o = false;
startButton.addEventListener('click', () => {
    // startButton.classList.add('hide')
    // debugger;
    ran = allColor[Math.floor(Math.random() * 4)]
    // selectable.push(ran)
    // if (!o) {
    //     selectable.shift()
    //     console.log('Esto se debe ejecutar solo una vez')
    //     o = true
    // }
    queue.push(ran)
    console.log(ran)
    console.log(ran.className)

    time = setTimeout(turnOnOf, 400, 'add', ran);

    setTimeout(turnOnOf, 700, 'remove', ran)
    console.log(queue)

    red.addEventListener('click', () => {
        // console.log(red.contains(queue[0]))
        // if (red.contains(queue[0])) {
        //     myfuntion(red);
        // }
        myfuntion(red);

    })
    yellow.addEventListener('click', () => {
        // console.log(yellow.contains(queue[0]))
        // if (yellow.contains(queue[0])) {
        //     myfuntion(yellow);
        // }
        myfuntion(yellow);

    })
    blue.addEventListener('click', () => {
        // console.log(blue.contains(queue[0]))
        // if (blue.contains(queue[0])) {
        //     myfuntion(blue);
        // }
        myfuntion(blue);

    })
    green.addEventListener('click', () => {
        // console.log(green.contains(queue[0]))
        // if (green.contains(queue[0])) {
        //     myfuntion(green);
        // }
        myfuntion(green);

    })

})
function myfuntion(pressedColor) {
    // if (queue[0].contains(queue[0])) {
    //     console.log('---------------------------------------')
    //     ran = allColor[Math.floor(Math.random() * 4)]
    //     console.table([{ NuevoValor: ran }]);
    //     queue.push(ran)
    //     console.log(queue)
    // }

    // console.log('---------------------------------------')
    // ran = allColor[Math.floor(Math.random() * 4)]
    // console.table([{ NuevoValor: ran }]);
    // queue.push(ran)

    console.log('Color presionado', pressedColor)
    console.log(queue)
    // selectable.push(pressedColor)
    // if (!o) {
    //     selectable.shift()
    //     console.log('Esto se debe ejecutar solo una vez')
    //     o = true
    // }
    // // selectable.push(pressedColor)
    selectable.push(pressedColor)

    console.log(selectable)
    // if(queue.length == 2){
    //     selectable.shift()
    //     console.log('Esto se debe ejecutar solo una vez')
    // }

    if (selectable.length == queue.length) {
        if (JSON.stringify(selectable) === JSON.stringify(queue)) {
            console.log('---------------------------------------')
            ran = allColor[Math.floor(Math.random() * 4)]
            console.table([{ NuevoValor: ran }]);
            queue.push(ran)
            console.log(queue)
            ejecutarConRetraso();
            selectable=[]
        } else {
            console.log('La secuecia no es igual, perdiste')
        }
    } else {
        console.log('Dale otra vez');
        console.log(selectable);
    }
    // let i=0;
    // for (let i = 0; i < selectable.length; i++) {
    //     if (selectable[i] == queue[i]) {
    //         console.log('Es igual')
    //         if (selectable.length == queue.length) {
    //             ejecutarConRetraso();
    //         }
    //     } else {
    //         console.log('No es same')
    //     }
    // }
    // for (let selec in selectable) {
    //     if(selectable[selec]==queue[selec+1]){
    //         console.log(selectable[selec])
    //     }else{
    //         console.log(selectable[selec])
    //     }
    // }

    // ejecutarConRetraso();

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

async function ejecutarConRetraso() {
    for (let i = 0; i < queue.length; i++) {
        let time = setTimeout(turnOnOf, 400, 'add', queue[i]);
        setTimeout(turnOnOf, 700, 'remove', queue[i])
        // console.log(`Iteración ${i}`);
        await esperar(1000); // espera 1 segundo antes de la siguiente
    }

    // console.log("¡Bucle terminado!");
}



