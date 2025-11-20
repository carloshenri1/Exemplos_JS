let idade = prompt("Digite sua idade:");
let mensagem = (idade<16) ? "Não pode votar" : (idade<18) ? "Voto opcional" : "Voto obrigatório";
alert(mensagem);