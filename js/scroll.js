const mainImg = document.getElementById('preview-img');

const thumbs = document.querySelectorAll('.scroll-menu img');

thumbs.forEach(thumb => {

    thumb.addEventListener('click', () => {

        const imgSrc = thumb.getAttribute('src');

        const img = new Image();
        img.onload = () => {
            mainImg.src = imgSrc;
        }
        img.src = imgSrc;
    });
});
