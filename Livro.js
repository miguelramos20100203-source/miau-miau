class Livro {
    constructor(titulo, autor, genero, anoPub, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anoPub = anoPub;
        this.numPaginas = numPaginas;
    }

    getInfo() {
        return `${this.titulo} - ${this.autor} (${this.anoPub})`;
    }

    contarPorGenero(livros) {
        const contagem = {};
        livros.forEach(l => {
            contagem[l.genero] = (contagem[l.genero] || 0) + 1;
        });
        return contagem;
    }

    mediaNumPaginas(livros) {
        const total = livros.reduce((acc, l) => acc + l.numPaginas, 0);
        return total / livros.length;
    }
}

module.exports = Livro;
