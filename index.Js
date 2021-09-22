/* ______ Cadastro de Peças (Lógica 2) ______ */

// Variáveis peças de carro.
let carparts = [
    {nome: "filtro de ar",peso:120},
    {nome: "junta do cabeçote",peso:70},
    {nome: "radiador",peso:1500},
    {nome: "motor",peso:10000},
    {nome: "termostato",peso:100}
]
// Validação de numero de itens.
let intensnumber = carparts.length;

// Validação de numero numero de peças.
if(intensnumber > 10){
    console.log("ERRO: limite de 10 peças excedido")
}else{

    for (let contador = 0 ;contador < intensnumber; contador++){
        let piece = carparts[contador].nome;
        let peso = carparts[contador].peso;
        
        // Validação de numero numero caracteres.
        if(piece.length < 3){
            console.log(`ERRO: A peça ${piece} Não pode ser cadastrada, possui menos de 3 caracteres!`)
        }else
        if(peso < 100){
            console.log(`ERRO: A peça ${piece} com peso de ${peso}g, Não pode ser cadastrada, possui o peso insuficiente!`)
            
        }
    }
}