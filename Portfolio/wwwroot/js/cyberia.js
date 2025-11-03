// ===========================================================
// CURSOR
const cursor = document.getElementById('cursor');   
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';            
});
// ===========================================================



// ===========================================================
// PARTICLES
const canvas = document.getElementById("bg");   
const ctx = canvas.getContext("2d");            // we get the 2D context of the canvas
canvas.width = window.innerWidth;               // we set the width of the canvas to the width of the window
canvas.height = window.innerHeight;             // we set the height of the canvas to the height of the window

let particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 }); // we create 100 particles with random positions and radius
}
//===========================================================



//===========================================================
// ANIMATION
function animateParticles() {                           // we create the method to animate the particles
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();                                // we begin a new path
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);         // we draw a circle for each particle
        ctx.fillStyle = "#7f81c9";                      // we set the color of the particles
        ctx.fill();                                     // we fill the circle
        p.y -= 0.2;                                     // we move the particle up
        if (p.y < 0) p.y = canvas.height;               // if the particle goes off the screen, we reset its position to the bottom
    });
    requestAnimationFrame(animateParticles);            // we call the method again to create a loop
}
animateParticles();
//===========================================================