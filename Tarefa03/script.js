var produto = []
var valor = []

var contProd = 0
var contPreco = 0


function adicionarProduto(){

    var text = document.getElementById("texto").value
    var list = document.getElementById("lista").innerHTML


    if(document.getElementById("texto").value == ""){
        window.alert('Digite algo para adicionar!!!')
        document.getElementById("texto").focus()
    }

    else if(contProd > contPreco){
        window.alert('Digite o preço do produto')
    }

    else{
        list += "<li>" +text+ "</li>" 
        document.getElementById("lista").innerHTML = list
        produto.push(text) 
        contProd++ 
    }

    document.getElementById("texto").value = null

    console.log(produto)

}

function adicionarPreco(){

    var text =document.getElementById("preco").value
    var list = document.getElementById("listapreco").innerHTML



    if(document.getElementById("preco").value == ""){
        window.alert('Digite algo para adicionar!!!')
        document.getElementById("preco").focus()
    }

    else if(contPreco > contProd - 1){
        window.alert('Digite primeiro o produto')
    }

    else{
        list += "<li>" +text+ "</li>" 
        document.getElementById("listapreco").innerHTML = list
        valor.push(text)
        contPreco++
         
    }

    document.getElementById("preco").value = null
    
    console.log(valor)
}

function atendimento(){
    var joeslei = document.getElementById("atendimento")
    var a1 = document.getElementById("organiza")
    var a2 = document.getElementById("start")

    a1.style.display = "none"
    a2.style.display = "none"


}