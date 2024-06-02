document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.detail-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const modal = new bootstrap.Modal(document.getElementById('artworkModal'));
    const modalTitle = document.getElementById('artworkModalLabel');
    const modalImage = document.getElementById('modalArtworkImage');
    const modalDescription = document.getElementById('modalArtworkDescription');

    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const artwork = button.previousElementSibling;
            const title = artwork.getAttribute('data-title');
            const description = artwork.getAttribute('data-description');
            const src = artwork.getAttribute('src');

            modalTitle.textContent = title;
            modalImage.src = src;
            modalDescription.textContent = description;

            modal.show();
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const artworkContainer = button.closest('.col');
            artworkContainer.remove();
        });
    });
});



