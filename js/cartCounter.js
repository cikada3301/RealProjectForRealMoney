const subtractButtons = document.querySelectorAll('.subtract-btn');
const addButtons = document.querySelectorAll('.add-btn');
const countElements = document.querySelectorAll('.countElement');
const cartButtons = document.querySelectorAll('.add-to-cart-btn');
const counterCarts = document.querySelector('.counter-carts');

const arrayIndexCount = new Map();
arrayIndexCount.set(cartButtons.length, 1);

const findParent = (element, selector) => {
    if (element.matches(selector)) {
        return element;
    }

    while (element.parentElement) {
        element = element.parentElement;

        if (element.matches(selector)) {
            return element;
        }
    }
}

const findCountElement = (element, selectorParent) => {
    if (element.matches(selectorParent)) {
        return element.querySelector('.countElement');
    }

    while (element.parentElement) {
        element = element.parentElement;

        if (element.matches(selectorParent)) {
            return element.querySelector('.countElement');
        }
    }
}

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

        let countElement = findCountElement(button, '.product');

        let parentElement;

        if (countElement === undefined) {
            countElement = findCountElement(button, '.product-h');
            parentElement = findParent(countElement, '.cart-button-h');
            parentElement.innerHTML = `
                                  <a class="btn btn-icon btn-success btn-icon-text btn-s d-flex justify-content-center text"
                                   href="javascript:;" style="font-size: 13px; margin-right: 10px;"><i class="i i-check-square"></i>В
                                   корзине</a>`;
        }

        else {
            parentElement = findParent(countElement, '.show-hover');
            parentElement.innerHTML = `
                                  <a class="btn btn-icon btn-success btn-icon-text btn-s d-flex justify-content-center text"
                                   href="javascript:;" style="font-size: 13px;"><i class="i i-check-square"></i>В
                                   корзине</a>`;
        }

        let productCount = parseInt(countElement.value);
        arrayIndexCount.set(index, productCount);

        counterCarts.classList.add('btn-primary')

        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${arrayIndexCount.size}`;
    });
});
