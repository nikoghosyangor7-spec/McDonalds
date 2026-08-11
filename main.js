window.onload = function () {
    const main = document.querySelector('.main');
    main.style.opacity = '1';
    main.style.marginTop = '20px';
}
const btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        if (this.innerText === 'Заказать') {
            this.innerText = 'Отменить';
        } else {
            this.innerText = 'Заказать';
        }
    })
}