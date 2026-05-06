const readline = require("readline-sync");

let corrente = [];
let poupanca = [];
let saldoCorrente = 0;
let saldoPoupanca = 0;

let opcao;
do {
  opcao = readline.question(
    "MENU \n 1- depositar \n 2-sacar \n 3-ver extrato \n 4- ver saldo \n 5- transferencia \n 6-sair"
  );
  // deposito
  if (opcao == "1") {
    let depo = readline.question(
      "qual conta voce ira depositar? \n  1-corrente \n 2-poupanca"
    );
    // depositop da conta corrente
    if (depo == "1") {
      let valor1 = readline.question("qual valor voce quer depositar?");
      saldoCorrente = valor1 + saldoCorrente;
      corrente.push("deposito: " + valor1);
    }
    // deposito da conta poupanca
    else if (depo == "2") {
      let valor2 = readline.question(" qual valor voce quer depositar?");
      saldoPoupanca = valor2 + saldoPoupanca;
      poupanca.push("deposito: " + valor2);
    }
  }
  // saque
  else if (opcao == "2") {
    let sacando = readline.question(
      "qual conta voce ira sacar? \n 1-corrente n 2-poupanca"
    );
    //saque da conta corrente
    if (sacando == "1")
      if (value1 <= saldoCorrente) {
        saldoCorrente = saldoCorrente - value1;
        4;
        corrente.push("saque: " + value1);
      } else {
        console.log("saque indisponivel, saldo insuficiente!!!");
      }
    //saque da conta poupanca
    if (sacando == "2") {
      let value2 = readline.question("qual valor voce deseja sacar?");
      if (value2 <= saldoPoupanca) {
        saldoPoupanca = saldoPoupanca - value2;
        poupanca.push("saque: " + value2);
      }
    }
    //extrato
    else if (opcao == 3) {
      let extrato = readline.question(
        "qual conta voce quer ver o extrato bancario de depositos e saques? \n 1-corrente \n 2-poupanca"
      );
      //extrato da conta corrente
      if (extrato == "1") {
        for (let i = 0; i <= corrente.length; i++) {
          console.log(corrente[i]);
        }
      }
      //extrato da conta poupanca
      if (extrato == "2") {
        for (let o = 0; o < poupanca.length; o++) {
          console.log(poupanca[o]);
        }
      }
      //saldo
      else if (opcao == "4") {
        let sardo = readline.question(
          "qual conta voce quer ver o saldo?\n 1-corrente\n2-poupanca"
        );
        //saldo da conta corrente
        if (sardo == "1") {
          console.log("saldo da sua conta corente é : " + saldoCorrente);
        }
        //saldo da conta corrente
        if (sardo == "2") {
          console.log("saldo da sua conta corrente é : " + saldoPoupanca);
        }
      }
      //transferencia
      else if (opcao == "5") {
        let trans = readline.question(
          "qual tipo de transferencia voce quer fazer?\n1-transferir da corrente para a poupanca \n 2- transferir da poupanca pra corrente"
        );
        if (trans == "1") {
          saldoCorrente = saldoCorrente + saldoPoupanca;
          console.log(
            "transferencia realizada com sucesso, seu saldo da conta corrente e conta poupanca foram atualizados!!"
          );
        }
        if (trans == "2") {
          saldoPoupanca = saldoPoupanca + saldoCorrente;
          console.log(
            "transferencia realizada com sucesso, seu saldo da conta corrente e conta poupanca foram atualizados!!"
          );
        }
      } else if (opcao == "6") {
        console.log("obrigada por acessar nossos sistemas!!!");
      }
    }
  }
} while (opcao != "6");
