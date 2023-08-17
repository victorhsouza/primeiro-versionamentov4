var txtCep = document.getElementById("cep")
var txtLogradouro = document.getElementById("logradouro")
var txtBairro = document.getElementById("bairro")
var txtLocalidade = document.getElementById("localidade")
var txtUf = document.getElementById("uf")
var span = document.getElementById("erro")
var form = document.getElementById('form')

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

function limparCampos(){
        txtLogradouro.value = ""
        txtBairro.value = ""
        txtLocalidade.value = ""
        txtUf.value = ""
}

function preencherCampos(json){
    
        txtLogradouro.value = json.logradouro
        txtBairro.value = json.bairro
        txtLocalidade.value = json.localidade
        txtUf.value = json.uf
}

async function getCep(){
    if(txtCep.value.length < 8){
        span.innerText = "Insira 8 digitos no CEP"
    } else{
        let resposta = await fetch(`https://viacep.com.br/ws/${txtCep.value}/json/`)
        let json = await resposta.json()

        console.log(json)
    
        if(json.erro){
            limparCampos()
            span.innerText = "CEP invalido!"
        } else{
            span.innerText = ""
            preencherCampos(json)
            
        }
    }
    

    
}


txtCep.addEventListener('focusout',getCep)

const abrirModal = document.querySelector('#abrir-modal')
const fecharModal = document.querySelector('#fechar-modal')
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")
const eventos = [abrirModal,fade,fecharModal]



// Utilizando o setTimeout voce consegue fazer um modal aparecer depois de um tempo estabelicido em mili segundos
// setTimeout(toggleModal, 5000)

eventos.map((el)=>{
    el.addEventListener('click', ()=>toggleModal())
})