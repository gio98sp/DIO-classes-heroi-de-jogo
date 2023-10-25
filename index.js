class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toUpperCase();
    }
    
    atacar() {
        let ataque = ""
      
        if (this.tipo === "GUERREIRO") {
            ataque = "ESPADA";
        } 
        else if (this.tipo === "MAGO") {
            ataque = "MAGIA";
        } 
        else if (this.tipo === "MONGE") {
            ataque = "ARTES MARCIAIS";
        } 
        else {
            ataque = "SHURIKEN";
        }
      
        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`
    }
}

let meuHeroi = new heroi("Exterminador", 230, "guerreiro")  // Alterar aqui as informações do heroi.

console.log(meuHeroi.atacar());
