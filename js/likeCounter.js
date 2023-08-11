const arrayLikes = document.querySelectorAll('.i-heart');

arrayLikes.forEach(like => {
    const parent = like.parentNode;
    const counter = document.querySelector('.counter-likes');
    like.addEventListener('click', () => {
        if (parent.classList.contains('btn-danger')) {
            counter.innerHTML = `<i class="i i-heart"></i> ${counter.textContent = parseInt(counter.textContent) - 1}`;
            if (parseInt(counter.textContent) === 0) {
                counter.classList.remove('btn-danger');
            }
            parent.classList.remove('btn-danger');

        } else {
            counter.innerHTML = `<i class="i i-heart"></i> ${counter.textContent = parseInt(counter.textContent) + 1}`;
            counter.classList.add('btn-danger')
            parent.classList.add('btn-danger');
        }
    })
})
