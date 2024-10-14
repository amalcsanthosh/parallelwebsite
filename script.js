let moon = document.getElementById("moon");
let text = document.getElementById("text");

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    moon.style.top = 20 + value * 0.2 + '%';  
    text.style.top = 40 + value * 0.5 + '%'; 
});
