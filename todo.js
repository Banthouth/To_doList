let contador = 0
function criar(){


    
    if (contador == 5){
        alert("Número total de tarefas ultrapassado, assine o plano master para mais!")
        return
    }
    
    const labela = document.getElementById("labelaTexto").value
    if(labela == ""){
        alert("Digite alguma coisa!!")
        return
    } else{
        contador = contador + 1
    }
    const caixa = document.createElement("input")
    const quebraLinha = document.createElement("br")
    const divi = document.createElement("div")
    


    divi.class = "divisoria"
    divi.id = "divisoria"
    divi.name = labela
   
    const botaoRemover = document.createElement("button")
    botaoRemover.id = "botaoRemover"
    botaoRemover.classList = "botaoRemover"
    botaoRemover.textContent = "X"
    botaoRemover.addEventListener("click", () => {divi.remove()})


    const desc = document.createElement("label")
    desc.classList = "desc"
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
    caixa.classList = "checkboxForm"
   

    


}
