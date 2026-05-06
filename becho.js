const readline = require("readline-sync");

let opaco = 0;

while (opaco != "sair") {
  opaco = readline.question(
    "DIGITE UMA OPCAO ,  1-QUERO SABER OS DIAS DE FUNCIPONAMENTO DO BRECHO, 2-QUERO SABER OS DIAS QUE O BRECHO NAO ESTA EM FUNCIONAMENTO , SAIR"
  );
  const diasabertos = [
    "sabado",
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
  ];
  if (opaco == "1") {
    const dias = 30;
    for (let dia = 1; dia <= dias; dia++) {
      const resto = dia % 7;
      if (resto != 1) {
        ("");
        console.log(
          "dia " + dia + " - (" + diasabertos[resto] + "): ABERTO!!!"
        );
      }
    }
  }

  if (opaco == 2) {
    const diasabertos = [
      "sabado",
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
    ];
    const dias = 30;
    for (let dia = 1; dia <= dias; dia++) {
      const resto = dia % 7;
      if (resto == 1) {
        console.log(
          "dia " + dia + " - (" + diasabertos[resto] + "): fechado!!!"
        );
      }
    }
  }
}
