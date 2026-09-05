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

// Interactive Flowers Functionality
document.querySelectorAll('.interactive-flower').forEach(flower => {
    flower.addEventListener('click', function(e) {
        // Add clicked animation
        this.classList.add('clicked');
        
        // Create explosion of petals
        for (let i = 0; i < 8; i++) {
            createPetal(e.clientX, e.clientY);
        }
        
        // Remove animation class after it completes
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
    });
    
    // Add hover effect sound feedback
    flower.addEventListener('mouseenter', function() {
        console.log('🌸 Flower hovered!');
    });
});

// Create falling petals when flower is clicked
function createPetal(x, y) {
    const petal = document.createElement('div');
    petal.innerHTML = '✨';
    petal.style.position = 'fixed';
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';
    petal.style.fontSize = '20px';
    petal.style.opacity = '1';
    petal.style.pointerEvents = 'none';
    petal.style.zIndex = '15';
    petal.style.animation = `petalFall ${2 + Math.random()}s ease-out forwards`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 3000);
}

// Add petal animation
const petalStyle = document.createElement('style');
petalStyle.textContent = `
    @keyframes petalFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(300px) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(petalStyle);

// Page load animation
window.addEventListener('load', function() {
    console.log('🎉 Happy Birthday Althea! 💜');
    document.body.style.opacity = '1';
});