class Paciente extends CadastroPessoa{
    constructor(nome, sobrenome, dtNascimento, cpf, tipoAtendimento, cartaoSus, senha){
        super(nome,sobrenome, dtNascimento, cpf)
        this.tipoAtendimento = tipoAtendimento;
        this.cartaoSus = cartaoSus;
        this.senha  = senha;

    }

    atendimento(){
        console.log("Paciente: " + this.nome + this.sobrenome);
        console.log("Tipo de atendimento: " + this.tipoAtendimento);
        console.log("Aguardando na fila de espera...senha: " + this.senha);

    }

}