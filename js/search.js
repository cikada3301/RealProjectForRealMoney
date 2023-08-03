const data = [
    {src: 'img/Rectangle3.png', name: 'Продукт творожный  "Десертный" МСП с ванилином и изюмом, контейнер 400г'},
    {src: 'img/Rectangle3.png', name: 'Продукт творожный  "Десертный" МСП с ванилином и изюмом, контейнер 400г'},
    {src: 'img/Rectangle3.png', name: 'Продукт творожный  "Десертный" МСП с ванилином и изюмом, контейнер 400г'},
];

const searchInput = document.querySelectorAll('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.forEach((input, index) => {
    input.addEventListener('input', event => {
        let query = event.target.value;

        if (index === 1) {
            const searchResultsMobile = document.querySelector('.search-results-mb');

            if (query !== '') {
                let results = data.filter(item => {
                    return item.name.toLowerCase().includes(query.toLowerCase());
                });

                searchResultsMobile.innerHTML = '';
                searchResultsMobile.style.display = 'block';

                results.forEach(item => {
                    let itemElement = document.createElement('div');
                    itemElement.classList.add('container', 'search-item-hover')
                    itemElement.innerHTML = `<div class="row">
                                    <div class="col-3 px-0">
                                        <img class="p-2" src="${item.src}"/>
                                    </div> 
                                    <div class="col-9 px-0">
                                        <p class="p-2" style="font-size: 13px; line-height: 16px;">${item.name}</p>
                                    </div>
                                </div>`
                    searchResultsMobile.appendChild(itemElement);
                });
            }

            else {
                searchResultsMobile.style.display = 'none';
                searchResultsMobile.style.zIndex = 0;
            }
        } else {
            if (query !== '') {
                let results = data.filter(item => {
                    return item.name.toLowerCase().includes(query.toLowerCase());
                });

                searchResults.style.display = 'block';
                searchResults.innerHTML = '';

                searchResults.style.position = 'absolute';
                searchResults.style.zIndex = 2;

                results.forEach(item => {
                    let itemElement = document.createElement('div');
                    itemElement.classList.add('container', 'search-item-hover')
                    itemElement.innerHTML = `<div class="row">
                                    <div class="col-3 px-0">
                                        <img class="p-2" src="${item.src}"/>
                                    </div> 
                                    <div class="col-9 px-0">
                                        <p class="p-2" style="font-size: 13px; line-height: 16px;">${item.name}</p>
                                    </div>
                                </div>`
                    searchResults.appendChild(itemElement);
                });
            } else {
                searchResults.style.display = 'none';
                searchResults.style.zIndex = 0;
            }
        }
    });
})
