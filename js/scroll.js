const scrollImgs = document.querySelectorAll('.scroll-menu img');
document.getElementById('preview-img').src = scrollImgs[0].src;

scrollImgs.forEach(img => {
    img.addEventListener('click', selectImg);
});

function selectImg(e) {
    const previewImg = document.getElementById('preview-img');
    previewImg.src = e.target.src;
}

$("#preview-wrapper").on('click', function() {
    const previewImg = document.getElementById('preview-img');
    $.fancybox.open({
        src  : previewImg.src,
        buttons : [
            "close"
        ]
    });
});