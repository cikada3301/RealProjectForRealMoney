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

        console.log(element)
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

        const countElement = findCountElement(button, '.product');

        const parentElement = findParent(countElement, '.product');

        const likeActive = parentElement.querySelector('.btn-danger');

        parentElement.innerHTML = `
                            <div class="card card-v h-100 rounded-0 p-2">
                                <div class="position-relative">
                                 <div class="embed-responsive embed-responsive-1by1">
                                    <img src="${parentElement.querySelector('.embed-responsive-item').src}" class="card-img-top embed-responsive-item" alt="product">
                                 </div>
                                 <a class="btn btn-icon btn-xs ${likeActive === null ? '' : 'btn-danger'} heart" href="javascript:;"><i class="i i-heart"></i></a>
                                 <label class="badge badge-gray fixed-tag">5637657</label>
                                 <div class="card-name">
                                        ОАО "Домочай
                                        название...
                                 </div>
                                </div>
                                <div class="card-body px-0 pb-0">
                                    <p class="card-title card-description" style="height: 42px;">
                                    ${parentElement.querySelector('.card-description').textContent}
                                    </p>
                                    <div class="amount amount-s mt-auto py-2">
                                        <span class="price">42,00</span>
                                        <span class="currency">BYN</span>
                                    </div>
                                    <div class="btn-add-to-cart mt-2">
                                        <a class="btn btn-icon btn-success btn-icon-text btn-s d-flex justify-content-center text"
                                           href="javascript:;" style="font-size: 13px;"><i class="i i-check-square"></i>В корзине</a>
                                    </div>
                                </div>
                            </div>`;

        let productCount = parseInt(countElement.value);
        arrayIndexCount.set(index, productCount);

        counterCarts.classList.add('btn-primary')

        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${arrayIndexCount.size}`;
    });
});
