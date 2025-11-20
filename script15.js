const pais = ["Brasil", "Argentina", "Canada", "Japão", "Alemanha", "França", "Australia", "India", "Russia", "Africa do Sul"];
let tamanho = pais.length;
let contadora = 2
for (; contadora< tamanho; contadora++) {
    console.log("Os paises mais ricos do mundo são:" + (contadora-1) + " º " + pais[contadora])
}