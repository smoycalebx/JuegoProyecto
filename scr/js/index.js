let cuadro = document.getElementsByClassName("cuadro")
const btnReiniciar =document.getElementById("btnReiniciar")

const ganar = [

    0,4,8 ,
    2,4,6 ,
    0,6,3 ,
    1,4,7 ,
    2,5,8 ,
    0,1,2 ,
    3,4,5 ,
    6,7,8 ,

]

for (let index = 0; index < cuadro.length; index++) {

        cuadro[index].addEventListener("click" , function () {
            if (cuadro[index].textContent !="" ) {
                alert ("¡Está lleno el espacio!")
                
                
            } else {
                
            }
            cuadro[index].textContent="X"
        console.log("click",(index+""));
        
        
    })

}




btnReiniciar.addEventListener("click" , function () {
    
})






