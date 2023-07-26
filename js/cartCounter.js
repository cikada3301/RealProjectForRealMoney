const arrayCarts = document.querySelectorAll('.i-shopping-cart');

const counterCarts = document.querySelector('.counter-carts');

const minusCount = document.querySelectorAll('.i-minus');
const plusCount = document.querySelectorAll('.i-plus');

let countCarts = 1;

minusCount.forEach(mc=> {
    mc.addEventListener('click', () => {
        const second = mc.parentNode.parentNode.querySelector('.countElement');
        if (countCarts > 0) {
            countCarts -= 1;
            second.value = countCarts;
            countCarts = 1;
        }
    })
})

plusCount.forEach(pc => {
    pc.addEventListener('click', () => {
        const second = pc.parentNode.parentNode.querySelector('.countElement');
        countCarts += 1;
        second.value = countCarts;
    })
    countCarts = 1;
})

arrayCarts.forEach(cart => {
    const second = cart.parentNode.parentNode.querySelector('.countElement');
    cart.addEventListener('click', () => {
        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${countCarts}`;
    })
})
