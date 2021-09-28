const docQuerySelector = (element) => document.querySelector(element); 

function animeScroll(){
const windowTop = window.pageYOffset;
    if(windowTop >= 100){
        docQuerySelector('header').classList.remove('header')
        docQuerySelector('img').classList.remove('imgLogo')
        docQuerySelector('span').classList.remove('btn-menu')
        docQuerySelector('header').classList.add('scroll')
        docQuerySelector('img').classList.add('imgscrol')
        docQuerySelector('span').classList.add('btn-menu-scroll')
        docQuerySelector('.barra-menu').style.marginTop = "-60px";
        docQuerySelector('.btn-menu-two').style.marginTop = "23px";
        docQuerySelector('.nav-menu').style.marginTop = "12px";
    }else{
        docQuerySelector('header').classList.add('header')
        docQuerySelector('img').classList.add('imgLogo')
        docQuerySelector('span').classList.add('btn-menu')
        docQuerySelector('header').classList.remove('scroll')
        docQuerySelector('img').classList.remove('imgscrol')
        docQuerySelector('span').classList.remove('btn-menu-scroll')
        docQuerySelector('.barra-menu').style.marginTop = "0px";
        docQuerySelector('.btn-menu-two').style.marginTop = "50px";
        docQuerySelector('.nav-menu').style.marginTop = "44px";
    }
}

function abrirMenu(){
    docQuerySelector('img').classList.remove('btn-menu')
    docQuerySelector('.barra-menu').style.opacity = 0;
    docQuerySelector('.barra-menu').style.display ="grid";
    setTimeout(() => {
        docQuerySelector('.barra-menu').style.opacity = 1;
    }, 200);
}

function fecharMenu(){
    docQuerySelector('.barra-menu').style.display="none"
}

window.addEventListener('scroll', function(){
    animeScroll();
})
