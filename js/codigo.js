let iconca=document.querySelector('.iconca');
let Carrito = document.querySelector('Carrito');
let header = document.querySelector('header');
let cerrar = document.querySelector('.cerrar');
Carrito.addEventListener('click', () => {
    if (Carrito.style.right === '-100%') {
        Carrito.style.right = '0';
        header.style.transform = 'translateX(-400%)';
    }else {

        iconca.style.right = '-100%';
        header.style.transform = 'translateX(0)';
    }
})