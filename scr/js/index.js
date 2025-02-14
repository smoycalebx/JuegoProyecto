let cuadro = document.getElementsByClassName("cuadro");
const btnReiniciar = document.getElementById("btnReiniciar");

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
    cuadro[index].addEventListener("click", function () {
        if (cuadro[index].textContent != "") {
            alert("¡Está lleno el espacio!"); 
        } else {
            if (player1 === true) {
                cuadro[index].textContent = "X";
                console.log("click", index + "");
                player1 = false;
            } else {
                cuadro[index].textContent = "O";
                console.log("click", index + "");
                player1 = true;
            }
            cargaDeGanadores();
        }
    });
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
    // Volver a habilitar los eventos de clic después de reiniciar
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].addEventListener("click", function () {
            if (cuadro[index].textContent != "") {
                alert("¡Está lleno el espacio!");
            } else {
                if (player1 === true) {
                    cuadro[index].textContent = "X";
                    console.log("click", index + "");
                    player1 = false;
                } else {
                    cuadro[index].textContent = "O";
                    console.log("click", index + "");
                    player1 = true;
                }
                cargaDeGanadores();
            }
        });
    }
});
