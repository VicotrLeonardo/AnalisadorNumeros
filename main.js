var botaoAdicionar = document.querySelector(".bloco-botaoAdicionar");
var lista = [];

function verificar(num, lista) {
  if (num < 1 && num > 100 && lista.indexOf(num) != -1) {
    alert("Número Invalido ou já adicionado na lista");
    return false;
  } else {
    return true;
  }
}

botaoAdicionar.addEventListener("click", function () {
  var num = Number(document.querySelector("input#num").value);
  if (verificar(num, lista)) {
    lista.push(num);
    console.log(lista);
  }
});
