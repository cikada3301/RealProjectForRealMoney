const categoryBtns = document.querySelectorAll('.category-list a');

const subcategories = document.querySelectorAll('.category-child');

const mapSubCategory = new Map();

mapSubCategory.set(0, `
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>`)

mapSubCategory.set(1, `
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>`)

mapSubCategory.set(2, `
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Хлеб и сдоба
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Кондитерские изделия
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>
<div class="col-md-6 col-lg-4 p-2">
                                                <a href="#" class="d-block subheader px-3 pt-3 pb-2">
                                                    Сухари, сушки
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                                <a href="#" class="px-3 py-1 d-block">
                                                    <div>Label</div>
                                                </a>
                                            </div>`)

let current = null;

categoryBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        if(current) {
            current.classList.remove('hovered');
            const prevI = current.querySelector('i');
            prevI.style.display = 'none';
        }

        btn.classList.add('hovered');
        const i = btn.querySelector('i');
        i.style.display = 'flex';
        current = btn;
    });
});

categoryBtns.forEach((btn, index) => {
    btn.addEventListener('mouseover', e => {

        const category = e.target.innerText;

        subcategories.forEach(sub => sub.classList.add('d-none'));

        $(`.category-title:contains("${category}")`).removeClass('d-none');

        $(`.category-child:contains("${category}")`).removeClass('d-none');

        $('.category-child').html(mapSubCategory.get(index));
    });
});

const button = document.getElementById('catalog');

function changeTarget() {
    if (window.innerWidth < 768) {
        button.dataset.target = '#modal-sm';
    } else {
        button.dataset.target = '#modal-lg';
    }
}

changeTarget();

window.addEventListener('resize', changeTarget);
