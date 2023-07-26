const arrayLikes = document.querySelectorAll('.i-heart');

const counter = document.querySelector('.counter-likes');

let count = 1;

arrayLikes.forEach(like => {
    const parent = like.parentNode;
    like.addEventListener('click', () => {
        if (parent.classList.contains('btn-danger')) {
            count -= 1;
            counter.innerHTML = `<i class="i i-heart"></i> ${count}`;
            parent.classList.remove('btn-danger');
        } else {
            count += 1;
            counter.innerHTML = `<i class="i i-heart"></i> ${count}`;
            parent.classList.add('btn-danger');
        }
    })
})
