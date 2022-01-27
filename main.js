var botaoAdicionar = document.querySelector(".bloco-botaoAdicionar");
var lista = [];
var campoTexto = document.querySelector(".bloco-select");
var blocotextoResultado = document.querySelector(".bloco-paragrafo");
botaoAdicionar.addEventListener("click", function () {
  function verificar(num, lista) {
    if (num < 1 || num > 100 || lista.indexOf(Number(num)) != -1) {
      return false;
    } else {
      return true;
    }
  }
  var num = Number(document.querySelector("input#num").value);

  if (verificar(num, lista)) {
    lista.push(num);
    campoTexto.innerHTML += `<option>O valor ${num} foi adicionado</option>`;
    lista.sort();
    console.log(lista);
    var MaiorValor = Math.max.apply(null, lista);
    var MenorValor = Math.min.apply(null, lista);
    var SomaValores = function () {
      let soma = 0;
      for (let i in lista) {
        soma += lista[i];
      }
      return soma;
    };
    var MediaValores = function () {
      var total = SomaValores();
      var media = total / lista.length;
      return media;
    };
    blocotextoResultado.innerHTML = `Ao todo, temos ${
      lista.length
    } números cadastrados <br> O maior valor informado foi ${MaiorValor} <br> O menor valor foi ${MenorValor} <br> Somando todos os valores temos ${SomaValores()} <br> A Média dos valores é ${MediaValores()} `;
  } else {
    alert("Número Invalido ou já adicionado na lista");
  }
});
