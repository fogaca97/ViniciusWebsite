
const botaoAnterior = document.getElementById('data-anterior');
const botaoProximo = document.getElementById('data-proximo');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const des1 = document.getElementById('des1');
const des2 = document.getElementById('des2');
const listaImagem = document.getElementById('img');

botaoAnterior.addEventListener('click', function(event){
    if(listaImagem.scrollLeft != 0){
        listaImagem.scrollLeft = 0
        Retrocede();
        
    } else {
        listaImagem.scrollLeft = 1135
        Avanca();
    }
    clearInterval(timer)
    timer = setInterval(function(){
        if(listaImagem.scrollLeft != 0){
            listaImagem.scrollLeft = 0
            Retrocede();
        } else {
            listaImagem.scrollLeft = 1135
            Avanca();
        }
    }, 3000)
});




botaoProximo.addEventListener('click', function(event){
    if(listaImagem.scrollLeft != 0){
        listaImagem.scrollLeft = 0
        Retrocede();
    } else {
        listaImagem.scrollLeft = 1135
        Avanca();
    }
    clearInterval(timer)
    timer = setInterval(function(){
        if(listaImagem.scrollLeft != 0){
            listaImagem.scrollLeft = 0
            Retrocede();
        } else {
            listaImagem.scrollLeft = 1135
            Avanca();
        }
    }, 3000)
});

nav1.addEventListener('click', function(event){
    listaImagem.scrollLeft -= 740.5;
    event.preventDefault();
    clearInterval(timer)
    timer = setInterval(function(){
        if(listaImagem.scrollLeft != 0){
            listaImagem.scrollLeft = 0
            Retrocede();
        } else {
            listaImagem.scrollLeft = 1135
            Avanca();
        }
    }, 3000)
    Retrocede();
});

nav2.addEventListener('click', function(event){
    listaImagem.scrollLeft += 740.5;
    event.preventDefault();
    clearInterval(timer)
    timer = setInterval(function(){
        if(listaImagem.scrollLeft != 0){
            listaImagem.scrollLeft = 0
            Retrocede();
        } else {
            listaImagem.scrollLeft = 1135
            Avanca();
        }
    }, 3000)
    Avanca();
});


var timer = setInterval(function(){
    if(listaImagem.scrollLeft != 0){
        listaImagem.scrollLeft = 0
        Retrocede();
        
    } else {
        listaImagem.scrollLeft = 1135
        Avanca();
    }
}, 3000)


function Avanca(){
    nav1.classList.remove("carousel__indicador--ativo")
    nav2.classList.add("carousel__indicador--ativo")
    des1.classList.add("carousel__descricao--inativo")
    des2.classList.remove("carousel__descricao--inativo")
}

function Retrocede(){
    nav1.classList.add("carousel__indicador--ativo")
    nav2.classList.remove("carousel__indicador--ativo")
    des1.classList.remove("carousel__descricao--inativo")
    des2.classList.add("carousel__descricao--inativo")
}

function CodificadorCarousel(){
    if(listaImagem.scrollLeft != 0){
        listaImagem.scrollLeft = 0
        Retrocede();
        
    } else {
        listaImagem.scrollLeft = 1135
        Avanca();
    }
}

const ano1 = document.getElementById('2017');
const ano2 = document.getElementById('2018');
const ano3 = document.getElementById('2019');
const ano4 = document.getElementById('2020');
const ano5 = document.getElementById('2021');






 