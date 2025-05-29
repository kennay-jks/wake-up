let pix = document.querySelector('#pix')
let cdd = document.querySelector('#cdd')
let vez = document.querySelector('#vez')
let sub = document.querySelector('#sub')
let preco = document.querySelector('.pi')
let descon = document.querySelector('#descon')
let acres = document.querySelector('#acres')
let total = document.querySelector('.tot')

function getSelectedRadioValue() {
    if (pix.checked) {
        return pix.value
    } else if (cdd.checked) {
        return cdd.value
    }
}

pix.addEventListener("click", () => {
    let valorSelecionado = getSelectedRadioValue()

    if (valorSelecionado) {
        console.log(valorSelecionado)
    } else {
        console.log("Nenhuma opção foi selecionada.")
    }
    let n1 = parseFloat(preco.textContent)

    if (valorSelecionado = 1) {
        let n2 = n1*15/100
        let n3 = n1 - n2
        descon.innerHTML = ('Desconto: ' + n2)
        acres.innerHTML = ('Acréscimo: 0.000,00')
        total.innerHTML = (n3)
    }
})
cdd.addEventListener("click", () => {
    let valorSelecionado = getSelectedRadioValue()

    if (valorSelecionado) {
        console.log(valorSelecionado)
    } else {
        console.log("Nenhuma opção foi selecionada.")
    }

    let n1 = parseFloat(preco.textContent)
    let vez2 = parseInt(vez.value)

    if (valorSelecionado = 2) {
        let n2 = n1*10/100
        let n3 = n2 * vez2
        let n4 = n1 + n3
        let n5 = parseFloat(n3).toFixed(2)
        acres.innerHTML = ('Acréscimo: ' + n5)
        descon.innerHTML = ('Desconto: 0.000,00')
        total.innerHTML = (n4)
    }
})

sub.addEventListener("click", () =>{
    let n1 = parseInt(preco)

    if (valorSelecionado = 1) {
        let n2 = n1*15/100
        let n3 = n1 - n2
        descon.innerHTML = ('Desconto ' + n2)
        total.innerHTML = (n3)
    } else {
        
    }
})