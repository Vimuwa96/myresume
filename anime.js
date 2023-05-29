
var myElement = document.getElementById("designs");
Ribble.attachEvent(myElement, {
// duration in milliseconds
duration: 1000,
// z-index
zIndex: "9999",
// background color
bgColor: "currentColor",
// max opacity level
maxOpacity: "0.4",
// easing function
easing: "cubic-bezier(0.4, 0, 0.2, 1)"
})



var myElement = document.getElementById("developments");
Ribble.attachEvent(myElement, {
// duration in milliseconds
duration: 1000,
// z-index
zIndex: "9999",
// background color
bgColor: "currentColor",
// max opacity level
maxOpacity: "0.4",
// easing function
easing: "cubic-bezier(0.4, 0, 0.2, 1)"
})


var myElement = document.getElementById("button-1");
Ribble.attachEvent(myElement, {
// duration in milliseconds
duration: 1000,
// z-index
zIndex: "9999",
// background color
bgColor: "currentColor",
// max opacity level
maxOpacity: "1",
// easing function
easing: "cubic-bezier(0.4, 0, 0.2, 1)"
})

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello!')
    .pauseFor(3000)
    .deleteAll()
    
    .typeString('Hola!')
    .pauseFor(3000)
    .deleteChars(7)

    .typeString('Bonjour!')
    .pauseFor(3000)
    .start();


    const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});




