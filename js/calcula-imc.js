//document manipula aquilo que o usuario ve, selecionando por meio do class aquilo que vai ser manipulado
var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricionista";


var segundoTitulo = document.querySelector(".segundoTitulo");
segundoTitulo.textContent = "Pacientes";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){ 
    
    var paciente = pacientes[i ];

    var pesoPaciente = paciente.querySelector(".info-peso"); //conter o td peso
    var peso = pesoPaciente.textContent;

    var alturaPaciente = paciente.querySelector(".info-altura");
    var altura = alturaPaciente.textContent;

    var nomePaciente = paciente.querySelector(".info-nome");
    var nome = nomePaciente.textContent;


    var valorImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){ 
        console.log("Peso inválido!");
        pesoValido = false;
        valorImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaValida){ 
        console.log("Altura inválida!")
        alturaValida = false;
        valorImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
    }


    if(pesoValido && alturaValida){ 

        var imc = calculaImc(peso,altura);
        valorImc.textContent = imc;

    }

    function calculaImc(peso,altura){ 
    
        var imc = peso / (altura * altura);

        return imc.toFixed(2);

    }
    
}

function validaPeso(peso){

    if(peso >= 0 && peso <= 1000){ 
        return true;  

    }else{
        return false;
}
}

function validaAltura(altura){

    if(altura >= 0 && altura <=3.00){
        return true;
    
    }else{
        return false;
    
    }

}







