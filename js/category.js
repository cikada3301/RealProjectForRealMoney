const firstLevels = document.querySelectorAll('.category-first-level');
const mobileCategory = document.querySelector('.mobile-category');
const nameCategory = document.querySelector('.name-category');

$('.dropdown').on('click', () => {})

firstLevels.forEach(firstLevel => {
    firstLevel.addEventListener('click', () => {
        mobileCategory.innerHTML = `<li class="category-second-level" onclick="openSecondLevel()">
                                            <div class="d-flex justify-content-between">
                                                <span class="py-2" style="font-size: 14px;">Хлеб и сдоба</span>
                                                <button type="button"
                                                        class="btn btn-flat-primary btn-icon-text pl-0">
                                                    <i class="i i-chevron-right"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li class="category-second-level" onclick="openSecondLevel()">
                                            <div class="d-flex justify-content-between">
                                                <span class="py-2 " style="font-size: 14px;">Кондитерские изделия</span>
                                                <button type="button"
                                                        class="btn btn-flat-primary btn-icon-text pl-0">
                                                    <i class="i i-chevron-right"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li class="category-second-level" onclick="openSecondLevel()">
                                            <div class="d-flex justify-content-between">
                                                <span class="py-2 " style="font-size: 14px;">Сухари, сушки</span>
                                                <button type="button"
                                                        class="btn btn-flat-primary btn-icon-text pl-0">
                                                    <i class="i i-chevron-right"></i>
                                                </button>
                                            </div>
                                        </li>`;
        nameCategory.innerHTML = ` <div class="dropdown text-nowrap">
                <a class="btn btn-icon-text btn-flat pl-0" href="javascript:;"><i class="i i-arrow-left"></i></a>
                <h6 style="display: inline">Label</h6></div>`
    });
})

function openSecondLevel() {
    const secondLevels = document.querySelectorAll('.category-second-level');
    secondLevels.forEach(secondLevel => {
        secondLevel.addEventListener('click', () => {
            mobileCategory.innerHTML = `
                                        <li>
                                        <div class="d-flex">
                                             <span class="py-2" style="font-size: 14px;">Label</span>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="d-flex">
                                             <span class="py-2" style="font-size: 14px;">Label</span>
                                        </div>
                                        </li>
                                        <div class="d-flex">
                                             <span class="py-2" style="font-size: 14px;">Label</span>
                                        </div>`;
            nameCategory.innerHTML = ` <div class="dropdown text-nowrap">
                <a class="btn btn-icon-text btn-flat pl-0" href="javascript:;"><i class="i i-arrow-left"></i></a>
                          <h6 style="display: inline">Хлеб и сдоба</h6></div>`
        });
    })

}