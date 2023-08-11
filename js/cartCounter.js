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

        const likeActive = parentElement.querySelector('.btn-danger');

        parentElement.innerHTML = `
                            <div class="card card-v h-100">
                                <div class="card-img">
                                    <img src="${parentElement.querySelector('.embed-responsive-item').src}" class="card-img-top embed-responsive-item" alt="product">
                                    <a class="btn btn-icon btn-xs ${likeActive === null ? '' : 'btn-danger'} heart" href="javascript:;"><i class="i i-heart"></i></a>
                                    <label class="tag fixed-tag">5637657</label>
                                    <div class="card-name">
                                        ОАО "Домочай
                                        название...
                                    </div>
                                </div>
                                <div class="card-body mt-3 pt-2 pl-3">
                                    <p class="card-title card-description">Пирожное "Рецепты лучших кофеен" с
                                        наполнителем
                                        "Клубника" на вафле 100г</p>
                                    <div class="amount amount-l pl-0">
                                        <span class="price">42,00</span>
                                        <span class="currency">BYN</span>
                                    </div>
                                    <div class="btn-add-to-cart">
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
