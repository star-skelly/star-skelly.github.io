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
        e.preventDefault();
        this.classList.add('clicked');
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
    ],
    space: [
        { title: "Cosmic Source Separation", desc: "A highly flexible improvement on GMCA and other source separation techniques, using starlet transformations and GMMs.", img: "space/sources.png", link: "#"},
        { title: "Microlensing ML Comparisons", desc: "Synthetic microlensing event generation pipeline with a high signal-to-noise ratio; then tested transformers, CNNs, MLPs, and simple least squares curve fitting for characterization.", img: "space/microlensing.png", link: "#" }
    ],
    writing: [
        { title: "Awards Won", desc: "2026: Cooley Fiction Writing (1st), O4U People's Choice Award Lightning Talk (on interdisciplinary engineering) \n 2025: Cooley Fiction Writing (Honorable Mention), Roger M. Jones Poetry (3rd), Caldwell Original Performance (4th)\n 2024: Cooley Fiction Writing (2nd), Roger M Jones (Honorable Mention), Advancing Climate Education (3rd), Science As Art (Honorable Mention) \n2023: Caldwell Written Poetry (1st), Caldwell Original Performance (3rd), Hopwood Weisberg Poem (2nd)", img: "pics/ocean_stars.jpg", link: "#"},
        { title: "Current Projects", desc: "'Lost Kids' Last Stand: a novel about music, complicated love, and time. About 100 pages into the 3rd draft so far. \n Captured By Sunlight: a graphic novel about family, magic, and running from past mistakes. We're 5 chapters in so far (~ 150 pages). \n ... and many more smaller projects", img: "pics/multimedia.PNG", link: "#" }
    ]
};

//about
const aboutData = {
    title: "SALEM",
    desc: "Welcome to Salem's sky!\n\n Salem builds robots, studies black holes, and starts punk bands. They've bridged the gap between many multidisciplinary projects, from the NASA Big Idea Challenge to musical robotics. They currently spend their days developing ML algorithms for the SPICEs research group, studying the black hole at the center of the Milky Way. They spend their nights learning 3D modeling, worldbuilding alien planets, and writing novels.\n\nWhen they aren't teaching sewing and media tools as a Ground Connections Fellow, Salem is likely climbing in the Red River Gorge or helping lead the Shift Creator Space. With 12 writing and arts awards, they most recently won the People's Choice Award for their talk on interdisciplinary engineering (at the Out4Undergrad Engineering Conference). Salem's next chapters include the New England Literature Program and a fulltime Software Engineering position at Dell Technologies, all paving the way for a PhD in Computer Vision for Astrophysics.",
    img: "pics/about_banner.jpeg",
    email: "to:loucks@umich.edu",
    resume: "https://docs.google.com/document/d/1GvpiqCMy-87ZbXhbJi_ENkIn63PSXk9d7KxkLGHC_ak/edit?usp=sharing",
    linkedin: "https://www.linkedin.com/in/salem-loucks-32985b199/",
    github: "https://github.com/star-skelly"
};

document.getElementById('about-trigger').addEventListener('click', (e) => {
    e.preventDefault();
    
    title.innerText = aboutData.title;
    container.classList.add('about-view');
    container.classList.remove('single-project-view'); // Clean up other states

    container.innerHTML = `
        <div class="about-card">
            <img src="${aboutData.img}" alt="About Banner">
            <div class="about-text-content">
                <span>
                <a href="${aboutData.email}" target="_blank">Feel free to email me for a chat!</a>
                <a href="${aboutData.resume}" target="_blank">Resume</a>
                <a href="${aboutData.linkedin}" target="_blank">LinkedIn</a>
                <a href="${aboutData.github}" target="_blank">GitHub</a>
                </span>
                <p id="typewriter-text"></p>
            </div>
        </div>
    `;
    modal.classList.remove('modal-hidden');
    const textElement = document.getElementById('typewriter-text');
    typeWriter(textElement, aboutData.desc, 25);
});

function typeWriter(element, text, speed = 30) {
    element.innerHTML = ""; // Clear existing text
    let i = 0;
    
    // Create a timer that runs every 'speed' milliseconds
    const timer = setInterval(() => {
        if (i < text.length) {
            const char = text.charAt(i);
            
            if (char === "\n") {
                element.innerHTML += "<br>"; // Convert newline to HTML break
            } else {
                element.innerHTML += char;
            }
            
            i++;
        } else {
            clearInterval(timer); // Stop when finished
        }
    }, speed);
}

const modal = document.getElementById('project-modal');
const container = document.getElementById('projects-container');
const title = document.getElementById('modal-title');
document.querySelectorAll('.interactive-logo').forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        
        const classMap = {
            'code-pos': 'code',
            'random-pos': 'random',
            'space-pos': 'space',
            'writing-pos': 'writing',
            'art-pos': 'art'
        };
        const categoryClass = Object.keys(classMap).find(cls => logo.classList.contains(cls));
        let activeData = classMap[categoryClass];
        let displayProjects = [];

        if (activeData === 'random') {
            // 1. Gather all projects from every other category into one list
            const allProjects = Object.keys(projectData)
                .filter(key => key !== 'random') // Don't include the empty random category
                .flatMap(key => projectData[key]);

            // 2. Pick one random project
            const randomProject = allProjects[Math.floor(Math.random() * allProjects.length)];
            displayProjects = [randomProject];
            
            title.innerText = "RANDOM!";
            // Add a class to the container to change the layout to "single-mode"
            container.classList.add('single-project-view');
        } else {
            displayProjects = projectData[activeData];
            title.innerText = activeData.toUpperCase();
            container.classList.remove('single-project-view');
        }

        // 3. Render the project(s)
        container.innerHTML = displayProjects.map(p => `
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
            c.addEventListener('mousemove', handlePan);
            c.addEventListener('mouseleave', resetPan);

            // Clicking to Full-Screen
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