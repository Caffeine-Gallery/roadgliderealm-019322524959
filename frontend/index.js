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

        // Load images with error handling
        const images = await backend.getImages();
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.innerHTML = images.map((url, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${url}" 
                     class="d-block w-100" 
                     alt="Harley-Davidson Road Glide 2024 View ${index + 1}"
                     onerror="this.src='https://i.imgur.com/noimage.jpg'; this.alt='Image not available'"
                >
            </div>
        `).join('');

    } catch (error) {
        console.error("Error loading data:", error);
        // Display error message to user
        document.querySelectorAll('.spinner-border').forEach(spinner => {
            spinner.parentElement.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Failed to load content. Please try again later.
                </div>
            `;
        });
    }
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadData);
