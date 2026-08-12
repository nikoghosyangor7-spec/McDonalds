window.onload = function () {
    const main = document.querySelector('.main');
    main.style.opacity = '1';
    main.style.marginTop = '20px';
}
const buyBtn = document.querySelectorAll('.buy-btn');
const plusBtn = document.querySelectorAll('.plus-btn');
const minusBtn = document.querySelectorAll('.minus-btn');
const count = document.querySelectorAll('.count');
for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', function () {
        if (this.innerText === 'Заказать') {
            this.innerText = 'Отменить';
        } else {
            this.innerText = 'Заказать';
            count[i].innerText = 0;
        }
    });
    plusBtn[i].addEventListener('click', function () {
        let currentCount = Number(count[i].innerText);
        if (currentCount < 10) {
            currentCount++;
            count[i].innerText = currentCount;
        } else {
            count[i].innerText = '10+';
        }
    });
    minusBtn[i].addEventListener('click', function () {
        if (count[i].innerText === '10+') {
            currentCount = 10;
        } else {
            currentCount = Number(count[i].innerText);
        }
        if (currentCount > 0) {
            currentCount--;
            count[i].innerText = currentCount;
        }
    });
}