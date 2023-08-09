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

        parentElement.className = 'col-12 col-lg-4 px-0 product';

        parentElement.innerHTML = `
                            <div class="card h-100">
                                <div class="card-img">
                                    <img src="${parentElement.querySelector('.embed-responsive-item').src}" class="card-img-top embed-responsive-item" alt="product">
                                    <a class="btn btn-icon btn-xs heart" href="javascript:;"><i class="i i-heart"></i></a>
                                    <label class="tag fixed-tag">5637657</label>
                                    <div class="card-name">
                                        ОАО "Домочай
                                        название...
                                    </div>
                                </div>
                                <div class="card-body pt-2">
                                    <p class="card-title card-description">${parentElement.querySelector('.card-title').textContent}</p>
                                    <div class="amount amount-s">
                                        <span class="price">42,00</span>
                                        <span class="currency">BYN</span>
                                    </div>
                                    <div class="pt-1">
                                        <a class="btn btn-icon btn-success btn-s d-flex justify-content-center text"
                                           href="javascript:;"><i class="i i-check-square"></i>В корзине</a>
                                    </div>
                                </div>
                            </div>`;

        let productCount = parseInt(countElement.value);
        arrayIndexCount.set(index, productCount);

        counterCarts.classList.add('btn-primary')

        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${arrayIndexCount.size}`;
    });
});
