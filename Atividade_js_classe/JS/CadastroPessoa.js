class CadastroPessoa{

    constructor(nome,sobrenome,dtNascimento,cpf ){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dtNascimento = dtNascimento;
        this.cpf = cpf;
    }

    cadastro(){
        console.log(this.nome + " Cadastro concluído...");
    }
    
}