document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".banner .slider .item"); // Select all items within the slider

    items.forEach((item, index) => {
        item.addEventListener("click", () => {    // Add click event listener to each item
            const link = item.dataset.link;
            if (link) {
                window.location.href = link;  // Redirect to the URL specified in the project
            }
        });
    });
});