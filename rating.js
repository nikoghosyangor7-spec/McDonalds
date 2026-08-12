window.onload = function () {
    const main = document.querySelector('.main');
    main.style.opacity = '1';
    main.style.marginTop = '20px';
}
const ratingBtns = document.querySelectorAll('.rating-btn');
const sendBtn = document.querySelector('.send-btn');
const res = document.querySelector('.res');
ratingBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        sendBtn.disabled = false;
    });
});
sendBtn.addEventListener('click', function () {
    res.textContent = 'Спасибо за оценку!';
});