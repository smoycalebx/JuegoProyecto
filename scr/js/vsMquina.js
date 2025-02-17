let cuadro = document.getElementsByClassName("cuadro");
const btnReiniciar = document.getElementById("btnReiniciar");
let listaVacia = [];
let listaOcupada =[];
let listaRestante =[];

const ganar = [
    [0, 4, 8],  
    [2, 4, 6],
    [0, 6, 3],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

let player1 = true;


for (let index = 0; index < cuadro.length; index++) {
    listaVacia.push(index)
    cuadro[index].addEventListener("click", function () {
        if (cuadro[index].textContent != "") {
            alert("¡Está lleno el espacio!"); 
        } else {
            cuadro[index].textContent = "X";
            listaOcupada.push(index)
            listaRestante = listaVacia.filter(el => !listaOcupada.includes(el));
            maquina()
            cargaDeGanadores();
        }
    });
}


function maquina() {
    let rival = listaRestante[Math.floor(Math.random() * listaRestante.length)];
    cuadro[rival].textContent = "O";
    }


function cargaDeGanadores() {
    for (let i = 0; i < ganar.length; i++) {
        const [a, b, c] = ganar[i];
        if (cuadro[a].textContent && cuadro[a].textContent === cuadro[b].textContent && cuadro[a].textContent === cuadro[c].textContent) {
            alert("Haz ganado crack :)");
            for (let i = 0; i < cuadro.length; i++) {
                cuadro[i].removeEventListener("click", function () {});
            }
            return; 
        }
    }
}

// Botón de reinicio para limpiar la partida
btnReiniciar.addEventListener("click", function () {
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].textContent = "";
    }
    alert("Partida Nueva");
    
});

