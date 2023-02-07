var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){ 
   event.target.parentNode.classList.add("remocao-tabela");
   
   setTimeout(function(){
    event.target.parentNode.remove();
   /* semelhante a: 
   var eventoAlvo = event.target;
   var paiAlvo = ..target.parentNode; TR = paciente que queremos remover
   paiAlvo.remove();
   */ 
    },500);


});
