// Music Player Functionality
const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

playBtn.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.textContent = '🎵 Play Paradise';
        isPlaying = false;
    } else {
        bgMusic.play();
        playBtn.textContent = '⏸ Pause';
        isPlaying = true;
    }
});

// Auto-play music (optional - may be blocked by browser)
window.addEventListener('load', function() {
    bgMusic.play().catch(function(error) {
        console.log('Auto-play was prevented. User needs to click play button.');
    });
});

// Create additional floating elements for celebration
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💜';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    heart.style.fontSize = '30px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '5';
    heart.style.animation = 'heartFall 3s ease-in forwards';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 800);

// Add CSS animation for hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Page load animation
window.addEventListener('load', function() {
    console.log('🎉 Happy Birthday Purple! 💜');
    document.body.style.opacity = '1';
});