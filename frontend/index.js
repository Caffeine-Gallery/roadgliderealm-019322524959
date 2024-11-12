import { backend } from "declarations/backend";

async function loadData() {
    try {
        // Load specifications
        const specs = await backend.getSpecs();
        const specsContainer = document.getElementById('specifications');
        specsContainer.innerHTML = specs.map(([key, value]) => `
            <div class="spec-item">
                <strong>${key}:</strong>
                <span>${value}</span>
            </div>
        `).join('');

        // Load features
        const features = await backend.getFeatures();
        const featuresContainer = document.getElementById('features');
        featuresContainer.innerHTML = features.map(feature => `
            <div class="feature-item">
                <i class="bi bi-check2-circle"></i> ${feature}
            </div>
        `).join('');

        // Load images with enhanced error handling
        const images = await backend.getImages();
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.innerHTML = images.map((url, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${url}" 
                     class="d-block w-100" 
                     alt="Harley-Davidson Road Glide 2024 - View ${index + 1}"
                     onerror="this.parentElement.innerHTML = '<div class=\'image-loading-error\'>Image currently unavailable</div>'"
                     loading="lazy"
                >
                <div class="image-attribution">Image from public domain</div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error loading data:", error);
        document.querySelectorAll('.spinner-border').forEach(spinner => {
            spinner.parentElement.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Unable to load content. Please refresh the page or try again later.
                </div>
            `;
        });
    }
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadData);

// Add event listeners for image error handling
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('imageGallery');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', (event) => {
            const activeItem = event.relatedTarget;
            const img = activeItem.querySelector('img');
            if (img && img.naturalWidth === 0) {
                img.onerror();
            }
        });
    }
});
