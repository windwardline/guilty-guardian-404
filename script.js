const btn = document.getElementById('runawayBtn');
const message = document.getElementById('message');
let hoverCount = 0;
let isCaught = false;

btn.addEventListener('mouseenter', () => {
    if (isCaught) return;

    if (hoverCount < 4) {
        const x = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 80 + 50);
        const y = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 60 + 30);
        
        btn.style.transform = `translate(${x}px, ${y}px) scale(0.95)`;
        hoverCount++;
    } else {
        btn.style.transform = `translate(0px, 0px) scale(1)`; 
        btn.style.background = 'var(--button-shade)';
    }
});

btn.addEventListener('mouseleave', () => {
    if (!isCaught && hoverCount < 4) {
        const currentTransform = btn.style.transform.replace(' scale(0.95)', '');
        btn.style.transform = currentTransform;
    }
});

btn.addEventListener('mousedown', () => {
    if(!isCaught) {
        btn.style.boxShadow = "0 0px 0 var(--stroke)";
        btn.style.marginTop = "10px";
    }
});

btn.addEventListener('click', () => {
    isCaught = true;
    message.innerHTML = "<span class='success-text'>Good boy! Routing you back to safety...</span>";
    btn.style.transform = "scale(0)";
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
});
