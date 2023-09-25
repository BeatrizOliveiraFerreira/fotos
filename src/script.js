const fotos = document.querySelectorAll('.fotos');
const botao = document.getElementById('voltar');
const avancar = document.getElementById('avancar');

let iniciarfotos = 0;

function esconderfoto() {
    fotos.forEach(item => item.classList.remove('ativar'))
}

function mostrarfoto() {
    fotos[iniciarfotos].classList.add('ativar')
}

function proximafoto() {
    esconderfoto()

    switch (iniciarfotos) {
        case fotos.length - 1:
            iniciarfotos = 0;
            break;
        default:
            iniciarfotos = iniciarfotos + 1;
            break;
    }
    
    
    mostrarfoto();
    
    
}

function anteriorfoto() {
    esconderfoto()

    switch (iniciarfotos) {
        case 0:
            iniciarfotos = fotos.length - 1;
            break;
        default:
            iniciarfotos = iniciarfotos - 1;
            break;
    }
    
    
    mostrarfoto();   
    
}

avancar.addEventListener('click', proximafoto)
botao.addEventListener('click', anteriorfoto)

