// DEVELOPER COMMENT:
// HONESTLY I DON'T KNOW MUCH ABOUT JAVASCRIPT, I HAD TO ASK AN AI TO HELP ME CREATE THIS BUT I WILL EXPLAIN HOW EACH OF THEM WORKS



// ===========================================================
// CURSOR
const cursor = document.getElementById('cursor');   // we select the element "cursor"
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';            // this two are for the movement of the mouse, it will whenever the mouse is
});
// ===========================================================



// ===========================================================
// NODES
const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {
    // Si tiene data-img, se aplica como fondo
    const img = node.dataset.img;
    if (img) {
        node.style.background = `url('${img}') no-repeat center center`;
        node.style.backgroundSize = 'cover';
    }

    // Redirección al click
    node.addEventListener('click', () => {
        const link = node.dataset.link; // lee el data-link
        if (link) window.location.href = link; // redirige al HTML correspondiente
    });

    // Animación de glow
    setInterval(() => {
        node.style.boxShadow = `0 0 ${Math.random() * 15 + 5}px #ffffff`;
    }, 1000);
});




// ===========================================================
// PARTICLES
const canvas = document.getElementById("bg");   // we select the canvas element "bg"
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

//===========================================================
// MODAL
function showModal(content) {
    let modal = document.createElement('div');                  // we create a new div element
    modal.classList.add('modal');                               // we add the class "modal" to the div
    modal.innerHTML = content;                                  // we set the inner HTML of the div to the content passed to the function
    document.body.appendChild(modal);                           // we add the div to the body of the document
    setTimeout(() => modal.classList.add('active'), 50);        // we add the class "active" to the div after 50 milliseconds to trigger the CSS transition
    modal.addEventListener('click', () => modal.remove());      // we add an event listener to the div to remove it when clicked
}
//===========================================================