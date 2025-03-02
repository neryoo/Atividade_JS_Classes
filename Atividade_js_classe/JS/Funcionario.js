class Funcionario extends CadastroPessoa{
    constructor(nome, sobrenome, dtNascimento, cpf, tpFuncionario, crm, especialidade){
        super(nome,sobrenome, dtNascimento, cpf)
        this.tpFuncionario = tpFuncionario;
        this.crm = crm;
        this.especialidade = especialidade;
}

    medico(){
        console.log("Funcionário: " + this.tpFuncionario);
        console.log("Médico: " + this.nome + this.sobrenome);
        console.log("Especialidade: " + this.especialidade);
        console.log("Médico " +  this.nome  +   this.sobrenome + " cadastrado com suceso, acesso liberado");
    }

}