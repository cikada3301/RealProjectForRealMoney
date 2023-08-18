const catalogBody = document.querySelector('.catalog-body');

const openCategory = () => {
    const firstLevels = document.querySelectorAll('.selected-category');

    firstLevels.forEach(firstLevel => {
        firstLevel.addEventListener('click', () => {
            catalogBody.innerHTML = `<a class="btn btn-flat btn-icon-text py-3 px-3" href="javascript:;" onclick="openCategoryCatalog()">
                                    <i class="i i-arrow-left"></i>
                                                              <p style="margin: 0; font-weight: bold; line-height: 18px; font-size: 14px;"> Label</p>
                                 </a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Все товары категории</a>
                                 <a class="btn btn-icon-text btn-flat px-3" href="javascript:;" onclick="openSubCategory(event)">Хлеб и сдоба<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
                                 <a class="btn btn-icon-text btn-flat px-3" href="javascript:;" onclick="openSubCategory(event)">Кондитерские изделия<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
                                 <a class="btn btn-icon-text btn-flat px-3" href="javascript:;" onclick="openSubCategory(event)">Сухари, сушки<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
        `;
        });
    })
}

const openCategoryCatalog = () => {
    catalogBody.innerHTML = `<h6 class="px-3 py-3">Каталог</h6>
                                <a class="btn btn-icon-text btn-flat px-3 selected-category" href="javascript:;" onclick="openCategory()">Label<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
                                <a class="btn btn-icon-text btn-flat px-3 selected-category" href="javascript:;" onclick="openCategory()">Label<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
                                <a class="btn btn-icon-text btn-flat px-3 selected-category" href="javascript:;" onclick="openCategory()">Label<span class="ml-auto"><i class="i i-chevron-right"></i></span></a>
    `;
}

const openSubCategory = (event) => {
    catalogBody.innerHTML = `<a class="btn btn-flat btn-icon-text py-3 px-3 selected-category" href="javascript:;" onclick="openCategory()">
                                    <i class="i i-arrow-left"></i>
                                                              <p style="margin: 0; font-weight: bold; line-height: 18px; font-size: 14px;">${event.target.innerText}</p>
                                 </a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Все товары категории</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                 <a class="px-3" style="font-size: 14px; padding-bottom: 6px; padding-top: 6px; color: black;" href="./catalog.html">Label</a>
                                
        `;
}
