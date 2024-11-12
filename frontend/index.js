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

        // Load images
        const images = await backend.getImages();
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.innerHTML = images.map((url, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${url}" class="d-block w-100" alt="Road Glide ${index + 1}">
            </div>
        `).join('');

    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadData);
