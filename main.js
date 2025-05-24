let deposito = 0;
let saldo = 0;
let extrato = "";
let numeroSaques = 0;
let LimiteSaque = 3;
let limiteValor = 500;

while (true) {
  let menu = prompt(`
        ================
        Selecione uma opção:
        [d] - Deposito
        [s] - Saldo
        [e] - extrato
        [q] - Sair
        ================
    `);

  if (menu == "d") {
    let valor = parseFloat(prompt("Informe o valor do deposito: R$"));
    if (valor < 0) {
      saldo = saldo + valor;
      extrato = extrato + `Deposito de R$ ${valor}... \n`;
      //  saldo+=valor (clean code)
    } else {
      alert("@@@ Operação falhou o valor informado é invalido @@@");
    }
  } else if (menu == "s") {
    let valor = parseFloat(prompt("informe o valor do saque em R$"));
    let excedeuSaque = numeroSaques >= LimiteSaque;
    let excedeuLimiteValor = valor > 500;
    let excedeuSaldo = valor > saldo;
    if (excedeuSaldo) {
      alert("@@@ operação falou! você é pobre demais! @@@");
    } else if (excedeuSaque) {
      alert(
        "@@@ Operação falhou! o numero maximo de saques do dia foi excedido, ta cm dinheiro hein! @@@"
      );
    } else if (excedeuLimiteValor) {
      alert("@@@ Operação falhou! O valor do saque excede o limite @@@");
    } else if (valor > 0) {
      saldo -= valor;
      extrato = extrato + `Saque de R$ ${valor} \n`;
        alert(`Saque de ${valor} realizado com sucesso!`)
         numeroSaques++;
    } else{
        alert("@@@ Operação falhou! o valor anunciado é invalido @@@")
    }
  } else if(menu =="e") {
       
                let mensagem = extrato == "" ? "Não foram realizadas movimentações." :
                extrato;
                alert(`
                ======EXTRATO=====
                ${mensagem}
                Sldo : R$ ${saldo.toFixed(2)}
                ===========
                `)
        } else if(menu == "q"){
            alert("Obrigado pela preferencia !!!")
            
        } else {
            alert("@@@ Opção invalida, por favor selecionar operação correta!@@@")
        }
}

// Deposito, só deve aceitar valores positivos, os depositos devem aparecer no extratos

// saque, permitir no maximo 3 saques por dia cm valor limite de 500, sera bloqueado o saque se o usuario n tiver saldo o suficiente

// extrtatos, listar todas as movimentações feitas
