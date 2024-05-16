const $btnBurger = document.querySelector('.btn-burger');
const $btnClose = document.querySelector('.btn-close')
const $offCanvas = document.querySelector('.offcanvas');
const $body = document.querySelector('body');
const $links = document.querySelectorAll('a');

$btnBurger.addEventListener("click",e=>{
    $offCanvas.classList.add('show')
    $body.style.overflow = 'hidden'
})

$btnClose.addEventListener("click", e=>{
    const target = $btnClose.getAttribute('data-target')
    document.querySelector(target).classList.remove('show')
    $body.removeAttribute('style')
})

$links.forEach(link=> link.addEventListener("click",e=>{
    e.preventDefault();
}))




    

