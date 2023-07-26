const categoryBtn = document.querySelector(".category-popup");
const subcategories = document.querySelector(".subcategories");

categoryBtn.addEventListener("mouseenter", () => {
    subcategories.style.display = "block";
});
