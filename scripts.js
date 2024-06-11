document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const favoritesList = document.getElementById('favorites-list');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const galleryItem = button.parentElement;
            const clonedItem = galleryItem.cloneNode(true);
            clonedItem.querySelector('.favorite-btn').remove();
            favoritesList.appendChild(clonedItem);
        });
    });
});
