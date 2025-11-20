//Exemplo de laço de Repetição FOR com Vetor//

const carroMarca = ["Volkswagem", "Toyota", "Hyundai", "BYD","Ford","BMW", "Ferrari"];
let tamanho= carroMarca.length;
for (let contadora = 0; contadora < tamanho; contadora++) {
    console.log("As marcas que a minha oficina atende são: " + carroMarca[contadora]);
}