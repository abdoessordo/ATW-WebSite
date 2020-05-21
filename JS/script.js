const scrollUpBtn = document.getElementById('scrollUpBtn');
const scrollDownBtn = document.getElementById('scrollDownBtn');
const body = document.getElementById('body')
const header = document.getElementById('header')
const check_box = document.getElementById('check-box')
const allcities = document.getElementById('allcities')
const darkmodeTxt = document.getElementById('darkmodeTxt')
const spe = document.getElementById('spe')
const text = document.getElementById('text')
const main = document.getElementById('main')
const allfacts = document.getElementById('allfacts')
const tanger_sub = document.getElementById('tanger_sub')
const marrakech_sub = document.getElementById('marrakech_sub')
const nav = document.getElementById('nav')
var i = 0

scrollDownBtn.addEventListener("click", () => {

    window.scrollTo({
        top: main.offsetTop - (header.clientHeight - 1),
        left: 0,
        behavior: 'smooth',
    })
});

scrollUpBtn.addEventListener("click", function () {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
});

function darkmode(){
    body.classList.toggle('mystyle1')
    text.classList.toggle('whitefont')
    darkmodeTxt.classList.toggle('whitefont')
    allcities.classList.toggle('whitefont')
    allcities.classList.toggle('whiteborder')
    allfacts.classList.toggle('whitefont')
    allfacts.classList.toggle('whiteborder')
    tanger_sub.classList.toggle('whitefont')
    marrakech_sub.classList.toggle('whitefont')
    nav.classList.toggle('nav_border')

    if(window.outerWidth < 1074){
        spe.classList.toggle('mystyle3')
        spe.classList.toggle('spe')
    }
}

check_box.addEventListener("click", darkmode);