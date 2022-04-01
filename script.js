var numeros = []

function clicar() { //Criar uma função ao clicar no botão contar
    let numero = parseInt(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')
    if (numero <= 0 || numero > 100) {
        window.alert('Por favor digite um número válido!')
    } else if (numeros.indexOf(numero) > -1) {
        window.alert("Não é permitido repetir o número")
    } else if (document.getElementById('txtn').value == "") {
        window.alert("Erro. Insira um valor entre 1 e 100")
    } else {
        let newOption = document.createElement('option')
        tab.appendChild(newOption)
        newOption.innerHTML = `O número ${numero} foi adicionado.`
        numeros.push(numero)
        res.innerHTML = ""
        document.getElementById('txtn').value = ""
    }
}



function finalizar() {
    let resultado = document.getElementById("res")
    let temp1 = document.createElement('p')
    let temp2 = document.createElement('p')
    let temp3 = document.createElement('p')
    resultado.appendChild(temp1)
    resultado.appendChild(temp2)
    resultado.appendChild(temp3)
    var maximo = numeros.reduce(function (a, b) {
        return Math.max(a, b)
    })
    var minimo = numeros.reduce(function (a, b) {
        return Math.min(a, b)
    })
    var valores = numeros.reduce((total, currentElement) => total + currentElement)
    var media = valores / numeros.length
    temp1.innerHTML = `O maior número digitado é ${maximo}`
    temp2.innerHTML = `O menor número digitado é ${minimo}`
    temp3.innerHTML = `A média dos números digitados é ${media}`

}