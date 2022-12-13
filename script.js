function adicionar_parametro(parametro) {
  document.querySelector("[name='tela']").value += parametro
}

function calcular() {
  conta = document.querySelector("[name='tela']").value
  document.querySelector("[name='tela']").value = eval(conta)
}

function pocentagem() {
  conta = document.querySelector("[name='tela']").value + '/ 100'
  document.querySelector("[name='tela']").value = eval(conta)
}

function delet() {
  document.querySelector("[name='tela']").value = ''
}