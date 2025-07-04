// Questão 1
console.log("Bem-vindo à nossa loja online! Esperamos que você tenha uma ótima experiência.");


// Questão 2
let nomeProduto = "Tênis Esportivo";
let precoProduto = 199.99;
let disponivel = azul;


// Questão 3
let preco = 100;
let desconto = preco * 0.20;
console.log("Desconto: R$" + desconto);


let precoFinal = preco - desconto;
console.log("Preço com desconto: R$" + precoFinal);


let parcelas = 2;
let valorParcela = precoFinal / parcelas;
console.log("Valor de cada parcela: R$" + valorParcela);


// Questão 4
let nomeCliente = "Maria Clara";
console.log("Bem-vinda à nossa loja online, " + nomeCliente + "! Boas compras!");


// Questão 5
let carrinho = ["Tênis", "Boné", "Calça", "Jaqueta"];
let itemRemovido = carrinho[2];
carrinho.splice(2, 1);
console.log("Você removeu do carrinho: " + itemRemovido);

// Questão 6
let Produtopreco = 120;
let dinheiroCliente = 100;


if (dinheiroCliente >= precoProduto) {
  console.log("Compra aprovada!");
} else {
  console.log("Saldo insuficiente.");
}


// Questão 7
for (let i = 1; i <= 5; i++) {
    console.log("Peça " + i + " adicionada ao estoque.");
  }  


// Questão 8
function mostrarBoasVindas() {
    console.log("Olá! Bem-vindo à nossa loja virtual!");
  }
 
  mostrarBoasVindas();


  function mostrarDesconto() {
    let preco = 100;
    let desconto = preco * 0.10;
    let precoFinal = preco - desconto;
    console.log("O valor com desconto é: R$" + precoFinal);
  }
 
  mostrarDesconto();
 
// Questão 9
let produto = {
    nome: "Tênis Branco",
    preco: 180
  };
 
  let cliente = {
    nome: "Carlos",
    idade: 30
  };
 
  console.log("Produto: " + produto.nome + " - R$" + produto.preco);
  console.log("Cliente: " + cliente.nome + ", " + cliente.idade + " anos");
 


// Questão 10
function pagamentoParcelado() {
    let preco = 300;
    let parcelas = 3;
    let valorParcela = preco / parcelas;
    console.log("Pagamento em " + parcelas + "x de R$" + valorParcela);
  }
 
  pagamentoParcelado();


  function pagamentoComDesconto() {
    let preco = 300;
    let desconto = preco * 0.15;
    let precoFinal = preco - desconto;
    console.log("Pagamento à vista com 15% de desconto: R$" + precoFinal);
  }
 
  pagamentoComDesconto();

