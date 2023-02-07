var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); 
    
    var form =  document.querySelector("#form-adiciona");
    
    var paciente = infoPacientesObtidasForm(form);
 
    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;

    }
    
    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

    adicionaPacienteNaTabela(paciente);

    //adiciona o novo paciente a tabela
    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro")
    mensagemErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){ 
    var pacienteAdicionar = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteAdicionar); 

}


function infoPacientesObtidasForm(form){ 
    var paciente = { 
        //extraindo o valor/informação do form
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    
    }
    return paciente;

}

function montaTr(paciente){ 
    //cria e cola o novo paciente na tr  
    var pacienteAdicionar = document.createElement("tr");
    pacienteAdicionar.classList.add ("paciente");
        
        var nomeAdicionar = montaTd(paciente.nome, "info-nome");
        var pesoAdicionar = montaTd(paciente.peso, "info-peso");
        var alturaAdicionar = montaTd(paciente.altura, "info-altura");
        var gorduraAdicionar = montaTd(paciente.gordura, "info-gordura");
        var imcAdicionar = montaTd(paciente.imc, "info-imc");

        pacienteAdicionar.appendChild(nomeAdicionar);
        pacienteAdicionar.appendChild(pesoAdicionar);
        pacienteAdicionar.appendChild(alturaAdicionar);
        pacienteAdicionar.appendChild(gorduraAdicionar);
        pacienteAdicionar.appendChild(imcAdicionar);
        

    return pacienteAdicionar

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add (classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [ ];


    if(paciente.nome.length == 0){
        erros.push("NOME NÃO INFORMADO!");
    }
    if(paciente.gordura.length == 0){
        erros.push("ÍNDICE DE GORDURA NÃO INFORMADO!");
    }
    if(!validaPeso(paciente.peso)){
       erros.push("PESO INVÁLIDO!");

    }if(!validaAltura(paciente.altura)){
        erros.push("ALTURA INVÁLIDA!");
    }
    if(paciente.peso.length == 0){
        erros.push("PESO NÃO INFORMADO!");
    }
    if(paciente.altura.length == 0){
        erros.push("ALTURA NÃO INFORMADA!");
    }

    /*if(paciente.nome.length == 0){
        erros.push("NOME NÃO INFORMADO!");
    } else if(paciente.gordura.length == 0){
        erros.push("ÍNDICE DE GORDURA NÃO INFORMADO!");
    } else if(!validaPeso(paciente.peso)){
       erros.push("PESO INVÁLIDO!");
    }else if(!validaAltura(paciente.altura)){
        erros.push("ALTURA INVÁLIDA!");
    }else if(paciente.peso.length == 0){
        erros.push("PESO NÃO INFORMADO!");
    } else if(paciente.altura.length == 0){
        erros.push("ALTURA NÃO INFORMADA!");
    } else { 
        pacienteAdicionar.push("Paciente adicionado com sucesso")
    } */
    return erros;

}