const subtractButtons = document.querySelectorAll('.subtract-btn');
const addButtons = document.querySelectorAll('.add-btn');
const countElements = document.querySelectorAll('.countElement');
const cartButtons = document.querySelectorAll('.add-to-cart-btn');
const counterCarts = document.querySelector('.counter-carts');

const arrayIndexCount = new Map();

subtractButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const countElement = countElements[index];
        let productCount = parseInt(countElement.value);

        if (productCount > 0) {
            productCount--;
            countElement.value = productCount;
            arrayIndexCount.set(index, productCount);
        }
    });
});

addButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const countElement = countElements[index];
        let productCount = parseInt(countElement.value);
        productCount++;
        countElement.value = productCount;
        arrayIndexCount.set(index, productCount);
    });
});

cartButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const countElement = button.parentElement.querySelector('.countElement');

        const parentElement = countElement.parentElement.parentElement.parentElement.parentElement.parentElement;

        const newElement = `<div class="pt-3"> <a class="btn btn-icon btn-success btn-s w-100 d-flex justify-content-center py-2 text" href="javascript:;"><i class="i i-check-square" style="font-size: 12px;"></i>В   корзине</a>  </div>`;

        parentElement.style.position = "relative";
        parentElement.children[0].classList.remove("card-v", "px-0")
        parentElement.children[0].classList.add("in-basket", "p-2")
        parentElement.children[0].style.position = "absolute";
        parentElement.children[0].style.zIndex = 1;
        parentElement.children[0].children[0].classList.remove("m-2")
        parentElement.children[0].children[1].classList.remove("mt-4", "p-2")
        parentElement.children[0].children[1].classList.add("pt-2", "px-0")
        parentElement.children[0].children[1].children[2].remove();
        parentElement.children[0].children[1].innerHTML += newElement;

        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${arrayIndexCount.size}`;
    });
});
