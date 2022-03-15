
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");


    navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");}
    else {
         navToggle.setAttribute("aria-label", "Abrir menú");}
});

const linksMenu = document.querySelectorAll(".nav-menu a[href^='#']"); 

linksMenu.forEach(linksMenu =>{
    linksMenu.addEventListener("click", function() {
        navMenu.classList.remove("nav-menu_visible");
    }) 
})





  

