const video = document.getElementById('intro-video');
const overlay = document.getElementById('intro-overlay');
const content = document.getElementById('main-content');
const links = document.querySelectorAll('.interactive-logo');

// When the MP4 finishes playing...
video.onended = () => {
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 800); // This must match the CSS transition time
};


links.forEach(link => {
    link.addEventListener('click', function(e) {
        // 1. Stop the browser from leaving the page immediately
        e.preventDefault();
        const destination = this.href;

        content.classList.add('navigating');
        links.forEach(l => l.classList.remove('no-navigation'));

        // need to have this zoom out overrule the hover thingy
        
        // 3. Mark this specific link as 'clicked'
        this.classList.add('clicked');

        // 4. Wait for the animation (0.7s) then change the page
        //setTimeout(() => {
            //window.location.href = destination;
        //}, 700); 
    });
});

// sideways scroll
 
const projectData = {
    code: [
        { title: "SatBird Multi-Model Ensemble", desc: "Improved predictions by 20% on SatBird state-of-the-art benchmark for crowdsourced bird encounter rates in Michigan and designed multi-model ensemble: CNNs + MLP with environmental and satellite datacubes, with a preprocessing pipeline to remove clouds", img: "code/satbird.png", link: "#" },
        { title: "3D/4D Human Mesh Reconstruction", desc: "Built 3D human reconstruction with SMPL, camera initialization, differentiable mesh generation, multi-stage optimization. Integrated 2D joint detectors with the transformer-based 4DHumans models to benchmark performance across images and video", img: "code/4Dhuman.png", link: "#" },
        { title: "Global Nominee Exoplanet Detector at NASA SpaceApps", desc: "Designed a Conditional Variational Autoencoder (cVAE) and synthetic data generator to model stellar variability and transits. Implemented NUFFT-based signal processing and adaptive interpolation for incomplete time-series data using Python and C++ extensions, with signal embeddings in a React dashboard", img: "code/spaceapps.png", link: "#" },
        { title: "SongChaser, 3rd Best Use of Intel AI award at MHacks", desc: "Built an ensemble of K-Nearest Neighbors (KNN) models to create paths of similar songs based on Spotify features. Integrated model and pathfinding with a Flask backend to connect to React frontend and host a demo version", img: "code/songchaser.png", link: "#" }
    ],
    art: [
        { title: "Early Explorations (2022)", desc: "What does it mean to be human? What does it mean to be you?", img: "art/human.PNG", link: "#"},
        { title: "Cosmic Perspective (2022)", desc: "The night gave me back my wonder / my distance./ I have never felt so soft a glow / my body inextricably spread across / the field of the cosmos.", img: "art/starview.PNG", link: "#" },
        { title: "The Ocean Within (2024)", desc: "Knowing we can only see through our own frames of reference BUT being open to exploring others' oceans.", img: "art/underwater.PNG", link: "#"},
        { title: "Connection (2023)", desc: "Realization: the ultimate nature of human existence is connection", img: "art/connection.PNG", link: "#"},        
    ]
    // Add space, random, writing...
};


const modal = document.getElementById('project-modal');
const container = document.getElementById('projects-container');
const title = document.getElementById('modal-title');

document.querySelectorAll('.interactive-logo').forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the category (e.g., 'code' or 'art') from a data-attribute or class
        const category = logo.classList.contains('code-pos') ? 'code' : 'art'; 
        
        // Populate the modal
        title.innerText = category.toLowerCase();
        container.innerHTML = projectData[category].map(p => `
            <div class="project-card">
                <div class="image-container">
                    <img src="${p.img}" alt="${p.title}">
                </div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank">View Project</a>
            </div>
        `).join('');

        const containers = container.querySelectorAll('.image-container');
        containers.forEach(c => {
            // 1. Add Panning
            c.addEventListener('mousemove', handlePan);
            c.addEventListener('mouseleave', resetPan);

            // 2. Add Clicking to Full-Screen
            c.addEventListener('click', (e) => {
                const imgSrc = c.querySelector('img').src;
                const lb = document.getElementById('lightbox');
                document.getElementById('lightbox-img').src = imgSrc;
                lb.classList.remove('modal-hidden');
            });
        });

        // Close Lightbox
        document.getElementById('close-lightbox').onclick = () => {
            document.getElementById('lightbox').classList.add('modal-hidden');
        };
        
        modal.classList.remove('modal-hidden');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.add('modal-hidden');
});

// Function to handle the panning math
function handlePan(e) {
    const container = e.currentTarget;
    const img = container.querySelector('img');
    
    // Get mouse position relative to the container
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Move the 'center' of the scale to the mouse position
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.5)"; // Deep zoom for better panning
}

function resetPan(e) {
    const img = e.currentTarget.querySelector('img');
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";
}