const video = document.getElementById('intro-video');
const overlay = document.getElementById('intro-overlay');
const content = document.getElementById('main-content');

// When the MP4 finishes playing...
video.onended = () => {
    // 1. Start the fade out of the video
    overlay.style.opacity = '0';
    
    // 2. Start the fade in of the logos
    content.classList.remove('hidden');
    content.style.opacity = '1';

    // 3. Completely remove the video overlay after fade finishes
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 800); // This must match the CSS transition time
};