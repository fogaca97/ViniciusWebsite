var boleanoNome = false
var boleanoEmail = false
var boleanoTelefone = false
var boleanoMensagem = false
document.querySelector("form").addEventListener('submit', validaform());

    

function validaform(event){
    var nome = form.nome.value;
    var email = form.email.value;
    var telefone = form.telefone.value;
    var mensagem = form.mensagem.value;

    if(nome != null && boleanoNome == true){
        document.getElementById('erro-nome').classList.remove('esconde-erro');
        if(nome == ''){
            boleanoNome = true;
        } else {
            document.getElementById('erro-nome').classList.add('esconde-erro');
            boleanoNome = false;
        }
    } else {if(nome != null && boleanoNome == false) {
        document.getElementById('erro-nome').classList.add('esconde-erro');
        if(nome == ''){
            boleanoNome = true;
        } else {
            boleanoNome = false;
        }
    }}



    if(email != null && boleanoEmail == true){
        document.getElementById('erro-email').classList.remove('esconde-erro');
        if(email == ''){
            boleanoEmail = true;
        } else {
            document.getElementById('erro-email').classList.add('esconde-erro');
            boleanoEmail = false;
        }
    } else {if(email != null && boleanoEmail == false) {
        document.getElementById('erro-email').classList.add('esconde-erro');
        if(email == ''){
            boleanoEmail = true;
        } else {
            boleanoEmail = false;
        }
    }}



    if(telefone != null && boleanoTelefone == true){
        document.getElementById('erro-telefone').classList.remove('esconde-erro');
        if(telefone == ''){
            boleanoTelefone = true;
        } else {
            document.getElementById('erro-telefone').classList.add('esconde-erro');
            boleanoTelefone = false;
        }
    } else {if(telefone != null && boleanoTelefone == false) {
        document.getElementById('erro-telefone').classList.add('esconde-erro');
        if(telefone == ''){
            boleanoTelefone = true;
        } else {
            boleanoTelefone = false;
        }
    }}



    if(mensagem != null && boleanoMensagem == true){
        document.getElementById('erro-mensagem').classList.remove('esconde-erro');
        if(mensagem == ''){
            boleanoMensagem = true;
        } else {
            document.getElementById('erro-mensagem').classList.add('esconde-erro');
            boleanoMensagem = false;
        }
    } else {if(mensagem != null && boleanoMensagem == false) {
        document.getElementById('erro-mensagem').classList.add('esconde-erro');
        if(mensagem == ''){
            boleanoMensagem = true;
        } else {
            boleanoMensagem = false;
        }
    }}
}