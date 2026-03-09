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
        content.classList.remove('no-navigation');

        // need to have this zoom out overrule the hover thingy
        
        // 3. Mark this specific link as 'clicked'
        this.classList.add('clicked');

        // 4. Wait for the animation (0.7s) then change the page
        //setTimeout(() => {
            //window.location.href = destination;
        //}, 700); 
    });
});
