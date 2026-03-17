import lucide from "https://unpkg.com/lucide@latest/dist/lucide.esm.js";

lucide.createIcons();

// --- Expanding video animation ---
const img = document.getElementById('expandingImage') as HTMLElement;
let ticking = false;

function updateAnimation(): void {
    const scrollPx = window.scrollY;
    const animationDistance = window.innerHeight * 0.55;
    
    let rawProgress = scrollPx / animationDistance;
    let progress = Math.max(0, Math.min(1, rawProgress));
    
    const smoothProgress = 1 - Math.pow(1 - progress, 3);
    let curveProgress = Math.pow(1 - progress, 1.5);
    
    img.style.setProperty('--progress', smoothProgress.toString());
    img.style.setProperty('--curve', `${3 * curveProgress}rem`);
    img.style.setProperty('--video-scale', (1.15 - 0.15 * smoothProgress).toString());
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateAnimation();
            ticking = false;
        });
        ticking = true;
    }
});

updateAnimation();
