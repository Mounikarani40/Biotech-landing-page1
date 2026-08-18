const sections = document.querySelectorAll(".section, .cta");

const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {  

        if (entry.isIntersecting) {  
            entry.target.classList.add("show");  
        }  

    });  

},  
{  
    threshold: 0.15  
}

);

sections.forEach((section) => {
observer.observe(section);
});

// Card mouse interaction

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

card.addEventListener("mousemove", (event) => {  

    const rect = card.getBoundingClientRect();  

    const x = event.clientX - rect.left;  
    const y = event.clientY - rect.top;  

    const centerX = rect.width / 2;  
    const centerY = rect.height / 2;  

    const rotateX = (y - centerY) / 15;  
    const rotateY = (centerX - x) / 15;  

    card.style.transform =  
        `perspective(600px)  
         rotateX(${rotateX}deg)  
         rotateY(${rotateY}deg)  
         translateY(-8px)`;  
});  


card.addEventListener("mouseleave", () => {  

    card.style.transform =  
        "perspective(600px) rotateX(0) rotateY(0) translateY(0)";  

});

});

// Animated statistics

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
(entries, observer) => {

entries.forEach((entry) => {  

        if (!entry.isIntersecting) {  
            return;  
        }  

        const counter = entry.target;  
        const target = Number(counter.dataset.target);  
        const suffix = counter.dataset.suffix;  

        let current = 0;  

        const updateCounter = () => {  

            const increment = Math.ceil(target / 40);  

            current += increment;  

            if (current >= target) {  
                current = target;  
            }  

            counter.textContent = current + suffix;  

            if (current < target) {  
                requestAnimationFrame(updateCounter);  
            }  
        };  

        updateCounter();  

        observer.unobserve(counter);  
    });  
},  
{  
    threshold: 0.7  
}

);

counters.forEach((counter) => {
counterObserver.observe(counter);
});

// Mouse-follow glow

const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {

mouseGlow.style.left = event.clientX + "px";  
mouseGlow.style.top = event.clientY + "px";

});

// Mobile navigation

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

// Back to top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {  
    backToTop.classList.add("show");  
} else {  
    backToTop.classList.remove("show");  
}

});

backToTop.addEventListener("click", () => {

window.scrollTo({  
    top: 0,  
    behavior: "smooth"  
});

});