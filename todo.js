function criar(){


    const labela = document.getElementById("labelaTexto").value
    const caixa = document.createElement("input")
    const quebraLinha = document.createElement("br")
    const divi = document.createElement("div")


    divi.class = "divisoria"
    divi.id = "divisoria"
    divi.name = labela
   
    const botaoRemover = document.createElement("button")
    botaoRemover.id = divi.id
    botaoRemover.class = "divisoria"
    botaoRemover.textContent = "X"
    botaoRemover.addEventListener("click", () => {divi.remove()})


    const desc = document.createElement("label")
    divi.appendChild(quebraLinha)
    divi.appendChild(desc)
    desc.appendChild(document.createTextNode(labela))
    divi.appendChild(caixa)
    divi.appendChild(botaoRemover)
   
   
    const principal = document.getElementById("formulario")
    principal.appendChild(divi)


    caixa.type = "checkbox"
    caixa.name = labela
    caixa.id = "divisoria"
    caixa.class = "divisoria"


}
