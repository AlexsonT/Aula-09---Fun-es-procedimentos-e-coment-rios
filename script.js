// /*Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;*/

// function imprimir(i){
//   console.log(i);
// }
// res = imprimir ("Imprimiu em uma folha de papel!");

// console.log('')

// /*
// Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
// Crie uma função para cada algoritmo proposto lá, exceto o número 6;
// Todas as funções devem retornar o valor final;
// Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
// Procure utilizar comentários para documentar cada método;
// Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
// */
// // 1. Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano; 


// function mesmoNome (a,b){
//   if(a==b){
//     return 'Os nomes são iguais!'
//   }else{
//     return 'Os nomes são diferentes!'
//   }
// }

// var saoIguais = mesmoNome ('João', 'João')

// console.log (saoIguais)

// console.log('')

// // >>2 .Crie uma variável maiorDeIdade que verifica se idade é de um adulto;

// function maiorIdade(mi){
//   if(mi>=18){
//     return 'É maior de idade'
//   }else{
//     return 'É menor de idade'
//   }
// }

// var maior = maiorIdade (17)

// console.log (maior)

// console.log('')

// // >>3. Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

// function calculaJuros(boleto){
//   return(boleto*1.1)
// }

// var valor = calculaJuros(1550.90).toLocaleString('pt-Br')

// console.log(`O valor atualizado do seu boleto é de: ${valor}`)

// console.log ('')

// 4.Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;

// itens = [10,20,30,40,50]

// function media(itens){
// soma=0

// for(index=0;index<itens.length;index++){
//   soma+=itens[index]
// }

// return soma/itens.length
// }


// //5.O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

function calculoLucroBruto(receitaLiquidaVendas, custoProdutoVendido){
  var margemBruta = lucroBruto/receitaLiquidaVendas
  return margemBruta

}

console.log (calculoLucroBruto(10.000,6.500))
console.log (calculoMargemBruta(10.000,6.500))






// Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada):


// cwi = "CWI"
// reset = "Reset"
// imprimir(mesmoNome(cwi, cwi))   // true
// imprimir(mesmoNome(cwi, reset)) // false

// imprimir("---")

// imprimir(maiorDeIdade(30)) // true
// imprimir(maiorDeIdade(18)) // true
// imprimir(maiorDeIdade(5))  // false

// imprimir("---")

// imprimir(valorComJuros(100))   // 110
// imprimir(valorComJuros(984.5)) // 1082.95

// imprimir("---")

// imprimir(mediaAritmetica([1]))             // 1
// imprimir(mediaAritmetica([1, 4, 10]))      // 5
// imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

// imprimir("---")

// imprimir(margemBruta(1000000, 500000))      // 50
// imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]






























/*Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada):
cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
*/