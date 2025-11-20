const carros  = ["BMW", "Ferrari", "Ford", "Hyundai", "Toyota", "Volkswagem"];
let tamanho = carros.length;
let sequencia= 2;
for (let contadora = 0; contadora < tamanho; contadora++) {
    console.log("O carro " + sequencia + " é: " + carros[contadora]);
    sequencia++;
}