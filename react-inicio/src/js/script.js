document.addEventListener("DOMContentLoaded", function() {
//"DOMContentLoaded" - espera até que todo o conteúdo do documento HTML seja carregado antes de executar a function

    var escolherCor = document.getElementById("escolherCor");           
    var containerParede = document.getElementById("containerParede");     
    var codigoCor = document.getElementById("codigoCor");               

    escolherCor.addEventListener("change", function() {

        var corEscolhida = escolherCor.value.toUpperCase();

        containerParede.style.backgroundColor = escolherCor.value;
        codigoCor.textContent = corEscolhida; 
    });
});
