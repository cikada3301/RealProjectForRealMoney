const arrayCarts = document.querySelectorAll('.i-shopping-cart');

const counterCarts = document.querySelector('.counter-carts');

const minusCount = document.querySelector('.i-minus');
const plusCount = document.querySelector('.i-plus');

let countCarts = 1;

// arrayCarts.forEach(cart => {
//     console.log('hi')
//     cart.addEventListener('mouseenter', function() {
//         elementClick.addEventListener('click', () => {
//             count += 1;
//             counter.innerHTML = `<i class="i i-shopping-cart"></i> ${count}`;
//         });
//     });
// })

minusCount.addEventListener('click', () => {
    const second = minusCount.parentNode.parentNode.querySelector('.countElement');
    if (countCarts > 0) {
        countCarts -= 1;
        second.value = countCarts;
    }
})

plusCount.addEventListener('click', () => {
    const second = minusCount.parentNode.parentNode.querySelector('.countElement');
    countCarts += 1;
    second.value = countCarts;
})

arrayCarts.forEach(cart => {
    const second = cart.parentNode.parentNode.querySelector('.countElement');
    cart.addEventListener('click', () => {
        console.log(second.value)
        countCarts += parseInt(second.value);
        console.log(second.value)
        console.log(countCarts)
        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${countCarts}`;
    })
})
