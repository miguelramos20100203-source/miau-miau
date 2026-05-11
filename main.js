const prompt = require('prompt-sync')();
const Livro = require('./Livro');

const livros = [];

let opcao;

while (true) {
    console.log("\n--- BIBLIOTECA ---");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Opção: "));

    if (isNaN(opcao)) {
        console.log("Opção inválida! Digite um número.");
        continue;
    }

    switch (opcao) {

        case 1:
           
            const titulo = prompt("Título: ");
            const autor = prompt("Autor: ");
            const genero = prompt("Gênero: ");
            const anoPub = parseInt(prompt("Ano de publicação: "));
            const numPaginas = parseInt(prompt("Número de páginas: "));

            const novoLivro = new Livro(
                titulo,
                autor,
                genero,
                anoPub,
                numPaginas
            );

            livros.push(novoLivro);

            console.log("Livro cadastrado!");
            break;

        case 2:
            
            if (livros.length === 0) {
                console.log("Nenhum livro cadastrado.");
            } else {
                livros.forEach((livro, index) => {
                    console.log(`[${index}] ${livro.getInfo()}`);
                });
            }
            break;

        case 3:
            
            if (livros.length === 0) {
                console.log("Nenhum livro para alterar.");
                break;
            }

            livros.forEach((livro, index) => {
                console.log(`[${index}] ${livro.getInfo()}`);
            });

            let indice = parseInt(
                prompt("Digite o índice do livro: ")
            );

            if (
                isNaN(indice) ||
                indice < 0 ||
                indice >= livros.length
            ) {
                console.log("Índice inválido.");
                break;
            }

            let livro = livros[indice];

            let novoTitulo = prompt(
                `Novo título (${livro.titulo}): `
            );
            if (novoTitulo.trim() !== "") {
                livro.titulo = novoTitulo;
            }

            let novoAutor = prompt(
                `Novo autor (${livro.autor}): `
            );
            if (novoAutor.trim() !== "") {
                livro.autor = novoAutor;
            }

            let novoGenero = prompt(
                `Novo gênero (${livro.genero}): `
            );
            if (novoGenero.trim() !== "") {
                livro.genero = novoGenero;
            }

            let novoAno = prompt(
                `Novo ano (${livro.anoPub}): `
            );
            if (novoAno.trim() !== "") {
                livro.anoPub = parseInt(novoAno);
            }

            let novasPaginas = prompt(
                `Novas páginas (${livro.numPaginas}): `
            );
            if (novasPaginas.trim() !== "") {
                livro.numPaginas = parseInt(novasPaginas);
            }

            console.log("Livro atualizado!");
            break;

        case 4:
            if (livros.length === 0) {
                console.log("Nenhum livro cadastrado.");
                break;
            }

            const aux = new Livro();

            const contagem = aux.contarPorGenero(livros);
            const media = aux.mediaNumPaginas(livros);

            console.log("\nContagem por gênero:");

            for (let genero in contagem) {
                console.log(`${genero}: ${contagem[genero]}`);
            }

            console.log(`\nMédia de páginas: ${media.toFixed(2)}`);
            break;

        case 0:
            console.log("Saindo...");
            process.exit();

        default:
            console.log("Opção inválida!");
    }
}