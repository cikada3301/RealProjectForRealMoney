const products = [
    {id: 1, title: 'Продукт творожный "Десертный" МСП с ванилином и изюмом, контейнер 400г', article: 5637657, src: 'img/Rectangle3.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: false},
    {id: 2, title: 'Продукт творожный "Десертный" МСП с ванилином и изюмом, контейнер 400г', article: 5637657, src: 'img/Rectangle2.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: false},
    {id: 3, title: 'Пирожное "Рецепты лучших кофеен" с наполнителем "Клубника" на вафле 100г', article: 5637657, src: 'img/Rectangle1.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: true},
    {id: 4, title: 'Мороженое "Выросли-поняли" пломбир шоколадный 70г', article: 5637657, src: 'img/Rectangle3.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: false},
    {id: 5, title: 'Мороженое "Выросли-поняли" пломбир ванильный, бумажный пакет 900г', article: 5637657, src: 'img/Rectangle3.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: false},
    {id: 6, title: 'Продукт творожный "Десертный" МСП с ванилином и изюмом, контейнер 400г', article: 5637657, src: 'img/Rectangle3.png', price: 42.00, description: 'ОАО "Домочай название..."', inCart: false},
];
function generateProduct(product) {
    return `
  <div class="col-12 col-lg-4 product px-0" id="${product.id}">
                    <div class="card card-v px-0">
                        <div class="m-2" style="position: relative;">
                            <div class="embed-responsive embed-responsive-1by1">
                                <img src="${product.src}" class="embed-responsive-item"
                                     alt="product">
                            </div>
                            <a class="btn btn-icon btn-xs position-absolute" href="javascript:;"
                               style="position: absolute; top: 0px; right: 0px;"><i class="i i-heart"></i></a>
                            <label class="article" style="position: absolute; color: #272B3A;bottom: 0px; left: 5px;">${product.article}</label>
                        </div>
                        <div class="card-body mt-4 p-2">
                            <p class="card-title">${product.title}</p>
                            <div class="amount amount-l">
                                <span class="price">${product.price}</span>
                                <span class="currency">BYN</span>
                            </div>
                            <div class="show-hover py-4">
                                <div class="shop-wrapper">
                                    <a class="btn btn-icon btn-s subtract-btn" href="javascript:;"><i class="i i-minus"></i></a>
                                    <input class="w-25 text-center countElement" type="text" value="1"/>
                                    <a class="btn btn-icon btn-s add-btn" href="javascript:;"><i class="i i-plus"></i></a>
                                    <a class="btn btn-icon btn-s btn-primary add-to-cart-btn" href="javascript:;"><i
                                        class="i i-shopping-cart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `;
}

function generateProductInCart(product) {
    return `
<div class="col-12 col-lg-4 product px-0" style="position: relative" id="${product.id}">
                    <div class="card in-basket p-2" style="position: absolute; z-index: 1">
                        <div style="position: relative">
                            <div class="embed-responsive embed-responsive-1by1">
                                <img src="${product.src}" class="embed-responsive-item" alt="product">
                            </div>
                            <a class="btn btn-icon btn-xs position-absolute" href="javascript:;"
                               style="position: absolute; top: 5px; right: 5px;"><i class="i i-heart"></i></a>
                            <label class="article" style="position: absolute; color: #272B3A;bottom: 0px; left: 5px;">${product.article}</label>
                            <label class="description">${product.description}</label>
                        </div>
                        <div class="card-body pt-2 px-0">
                            <p class="card-title">${product.title}</p>
                            <div class="amount amount-l">
                                <span class="price">${product.price}</span> <span class="currency">BYN</span>
                            </div>
                            <div class="pt-3">
                                <a class="btn btn-icon btn-success btn-s w-100 d-flex justify-content-center py-2 text"
                                   href="javascript:;"><i class="i i-check-square" style="font-size: 12px;"></i>В
                                    корзине</a>
                            </div>
                        </div>
                    </div>
                </div>
  `;
}

window.addEventListener('load', () => {

    const productsContainer = document.querySelector('.sort')

    let productsHtml = '';


    products.forEach(product => {

        if (product.inCart === false) {
            const productHtml = generateProduct(product);
            productsHtml += productHtml;
        }
        else {
            const productHtml  = generateProductInCart(product);
            productsHtml += productHtml;
        }
    });

    productsContainer.insertAdjacentHTML('afterend', productsHtml);

});