let contador = []

function inverter(check, desc){

    if (check.checked){

        desc.style.textDecorationLine = "line-through"
        desc.style.opacity="0.5"
    }else{

        desc.style.textDecorationLine = "none"
        desc.style.opacity="1"
    }

}


document.addEventListener("DOMContentLoaded", function(){document.getElementById("labelaTexto").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
})})
    

;
function removeArrayItem(array, item){
    let indice = array.indexOf(item)


    array.splice(indice, 1)


}


function remover(objeto, objeto2){
    objeto.remove()
    removeArrayItem(contador, objeto2)


}


function criar(){


    if (contador.length == 5){
        alert("Número total de tarefas ultrapassado, assine o plano master para mais!")
        return
    }
   
    let labela = document.getElementById("labelaTexto").value
    if(labela == ""){
        alert("Digite alguma coisa!!")
        return
    } else{
        contador.push(labela)
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
    botaoRemover.addEventListener("click", () => {remover(divi, labela)})

    caixa.type = "checkbox"
    caixa.name = labela
    caixa.id = "caixa"
    caixa.classList = "checkboxForm"
   
    

    


    const desc = document.createElement("label")
    desc.classList = "desc"
    caixa.addEventListener("click", () => {inverter(caixa, desc)})
    
    
    divi.appendChild(quebraLinha)
    divi.appendChild(desc)
    desc.appendChild(document.createTextNode(labela))
    divi.appendChild(caixa)
    divi.appendChild(botaoRemover)

   
    const principal = document.getElementById("formulario")
    principal.appendChild(divi)
 
}






