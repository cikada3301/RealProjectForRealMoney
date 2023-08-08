const btnFilter  = document.getElementById("showFilter");

btnFilter .addEventListener('click', function () {
    let filters = document.querySelectorAll('.show-filter');
    filters.forEach(function(filter) {
        if (filter.classList.contains("d-none")) {
            filter.classList.remove("d-none");
            btnFilter.innerHTML = '<i class="i i-minus-square-filled"></i>Скрыть фильтр';
        }
        else {
            filter.classList.add("d-none");
            btnFilter.innerHTML = '<i class="i i-plus-square-filled"></i>Показать фильтр';
        }
    });
})