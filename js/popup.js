const categoryBtn = document.querySelector(".category-child");
const subcategories = document.querySelector(".subcategories");

categoryBtn.addEventListener("mouseenter", () => {
    subcategories.style.display = "block";
});

categoryBtn.addEventListener("mouseleave", () => {
    subcategories.style.display = "none";
});
