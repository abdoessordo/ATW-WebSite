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

check_box.addEventListener("click", function () {
    i++;
    i = i % 2
    if(window.outerWidth > 1074){
        if (i == 1) {
            body.classList.add('mystyle1')
            text.classList.replace('darkfont', 'whitefont')
            darkmodeTxt.classList.replace('darkfont', 'whitefont')
            allcities.classList.replace('darkfont', 'whitefont')
            allfacts.classList.replace('darkfont', 'whitefont')
            allcities.classList.replace('blackborder','whiteborder')
            allfacts.classList.replace('blackborder','whiteborder')
            tanger_sub.classList.replace('darkfont', 'whitefont')
            marrakech_sub.classList.replace('darkfont', 'whitefont')
            nav.classList.add('nav_border')
        } else {
            body.classList.remove('mystyle1')
            darkmodeTxt.classList.replace('whitefont', 'darkfont')
            text.classList.replace('whitefont', 'darkfont')
            spe.classList.replace('mystyle3', 'spe')
            allcities.classList.replace('whitefont', 'darkfont')
            allfacts.classList.replace('whitefont', 'darkfont')
            allcities.classList.replace('whiteborder','blackborder')
            allfacts.classList.replace('whiteborder','blackborder')
            tanger_sub.classList.replace('whitefont', 'darkfont')
            marrakech_sub.classList.replace('whitefont', 'darkfont')
            nav.classList.remove('nav_border')  
        } 
    }else{
        if (i == 1) {
            body.classList.add('mystyle1')
            text.classList.replace('darkfont', 'whitefont')
            darkmodeTxt.classList.replace('darkfont', 'whitefont')
            spe.classList.replace('spe', 'mystyle3')
            allcities.classList.replace('darkfont', 'whitefont')
            allfacts.classList.replace('darkfont', 'whitefont')
            allcities.classList.replace('blackborder','whiteborder')
            allfacts.classList.replace('blackborder','whiteborder')
            tanger_sub.classList.replace('darkfont', 'whitefont')
            marrakech_sub.classList.replace('darkfont', 'whitefont')
            nav.classList.add('nav_border')
        } else {
            body.classList.remove('mystyle1')
            darkmodeTxt.classList.replace('whitefont', 'darkfont')
            text.classList.replace('whitefont', 'darkfont')
            spe.classList.replace('mystyle3', 'spe')
            allcities.classList.replace('whitefont', 'darkfont')
            allfacts.classList.replace('whitefont', 'darkfont')
            allcities.classList.replace('whiteborder','blackborder')
            allfacts.classList.replace('whiteborder','blackborder')
            tanger_sub.classList.replace('whitefont', 'darkfont')
            marrakech_sub.classList.replace('whitefont', 'darkfont')
            nav.classList.remove('nav_border')
        }
    }
});