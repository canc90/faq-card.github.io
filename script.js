"use strict"

const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(function (button) {
    button.addEventListener("click", function () {
        // console.log(this);
        this.classList.toggle('active');
        // fechar ao abrir outro btn
        if (button.classList.contains('active')) {
            btn.forEach(function (button) {
                button.classList.remove('active');
            });
            button.classList.toggle("active");
        };
    });
});