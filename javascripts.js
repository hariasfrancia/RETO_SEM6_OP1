

let boton = document.getElementById("id_btn");
let texto = document.getElementById("id_txt");
let arreglo=[];

function imprimirTexto(){

    boton.addEventListener('click',function(){
        arreglo.push(texto.value);
        texto.value="";
        console.log(arreglo);
    })

}
imprimirTexto();
