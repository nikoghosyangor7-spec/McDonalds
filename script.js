window.onload = function(){
    const main = document.querySelector('.main');
    main.style.opacity = '1';
    main.style.marginTop = '0px';
}
const inpName = document.getElementById('inpName');
const inpSurName = document.getElementById('inpSurName');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn');
function send(){
    const inpNameVal = inpName.value.trim();
    const inpSurNameVal = inpSurName.value.trim();
    if (inpNameVal === 'admin' && inpSurNameVal === 'admin'){
        window.location.href = 'main.html';
    } else if (inpNameVal === '' || inpSurNameVal === '') {
        res.textContent = 'Заполните все поля';
    } else {
        res.textContent = 'Неверное имя или фамилия';
    }
}
btn.addEventListener('click', send);