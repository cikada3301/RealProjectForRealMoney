document.addEventListener('DOMContentLoaded', function () {
    var parallelButton = document.getElementById("parallel");
    var gridButton = document.getElementById("grid");

    parallelButton.addEventListener('click', function () {
        var productList = document.querySelectorAll('.product');
        productList.forEach(function(product) {
            product.classList.add('d-none');
        });

        var productHList = document.querySelectorAll('.product-h');
        productHList.forEach(function(productH) {
            productH.classList.remove('d-none');
        });

        parallelButton.classList.add('active')
        gridButton.classList.remove('active')
    })

    gridButton.addEventListener('click', function () {
        var productList = document.querySelectorAll('.product-h');
        productList.forEach(function(product) {
            product.classList.add('d-none');
        });

        var productHList = document.querySelectorAll('.product');
        productHList.forEach(function(productH) {
            productH.classList.remove('d-none');
        });

        parallelButton.classList.remove('active')
        gridButton.classList.add('active')
    })
});