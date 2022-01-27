var botaoAdicionar = document.querySelector(".bloco-botaoAdicionar");
var lista = [];
var campoTexto = document.querySelector('.bloco-select');

botaoAdicionar.addEventListener("click", function () {

  function verificar(num, lista) {
    if ((num < 1 || num > 100) || (lista.indexOf(Number(num)) != -1)) {
      return false;
    } else {
      return true;
    }
  }
  var num = Number(document.querySelector("input#num").value);
  
  if (verificar(num, lista)) {
    lista.push(num);
    console.log(lista);
    campoTexto.innerHTML += `<option>O valor ${num} foi adicionado</option>`

  }else{
    alert("Número Invalido ou já adicionado na lista");
  }
});
