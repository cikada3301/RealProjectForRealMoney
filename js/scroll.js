const scrollImgs = document.querySelectorAll('.scroll-menu img');
document.getElementById('preview-img').src = scrollImgs[0].src;
const previewImg = document.getElementById('preview-img');
let previewWrpr = document.getElementById('preview-wrapper');
let currentIndex = 0;

scrollImgs.forEach(img => {
    img.addEventListener('click', selectImg);
});

function selectImg(e) {
    previewImg.src = e.target.src;
    currentIndex = e.target.dataset.index;
    previewWrpr.setAttribute('data-fancybox-index', currentIndex);
}
