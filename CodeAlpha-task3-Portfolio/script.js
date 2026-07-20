// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

section.classList.add("show");

}

});

});

// Add hidden class initially

sections.forEach(section =>{

section.classList.add("hidden");

});

// Active Navbar

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});