 console.log("Atividade JS Classes");

 let sabrina = new CadastroPessoa("Sabrina","Nery da Silva", "04/10/2001", "123.456.789.93"  );
 let paciente1 = new Paciente("Maria", "da Silva", "10/01/1990", "123.456.789.11", "Cardiologista", "0000000.0000.12", "23");
 let funcionario1 = new Funcionario("Gabriel", "Silva", "23/07/1999", "456.789.123-45", "Médico", "12459", "Neurologista");

console.log(sabrina);
sabrina.cadastro();

console.log(paciente1);
paciente1.atendimento();

console.log(funcionario1);
funcionario1.medico();