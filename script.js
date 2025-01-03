
// Select the element to animate
const animatedElementNav = document.querySelector('.animate-on-scroll-nav');
const animatedElementNav2 = document.querySelector('.animate-on-scroll-nav2');
const animatedElementNav3 = document.querySelector('.animate-on-scroll-nav3');
const animatedElementNav4 = document.querySelector('.animate-on-scroll-nav4');
const animatedElement = document.querySelector('.animate-on-scroll');
const animatedElementContact = document.querySelector('.animate-on-scroll-contact');
const animatedElementHeader = document.querySelector('.animation-header');



// Function to check if the user has scrolled down
function triggerAnimation() {
    if (window.scrollY > 0) { // Trigger when scroll is greater than 0
        // animatedElementNav.classList.add('active-nav');
        // animatedElementNav2.classList.add('active-nav');
        // animatedElementNav3.classList.add('active-nav');
        // animatedElementNav4.classList.add('active-nav');
        animatedElement.classList.add('active');
        animatedElementContact.classList.add('active-contact');
        animatedElementHeader.classList.add('active-header');


    } else {
        // animatedElementNav.classList.remove('active-nav'); // Optional: Reset if scrolled back to top
        // animatedElementNav2.classList.remove('active-nav'); // Optional: Reset if scrolled back to top
        // animatedElementNav3.classList.remove('active-nav'); // Optional: Reset if scrolled back to top
        // animatedElementNav4.classList.remove('active-nav'); // Optional: Reset if scrolled back to top
        animatedElement.classList.remove('active'); // Optional: Reset if scrolled back to top
        animatedElementContact.classList.remove('active-contact'); // Optional: Reset if scrolled back to top
        animatedElementHeader.classList.remove('active-header'); // Optional: Reset if scrolled back to top


    }
}

// Attach the scroll event
window.addEventListener('scroll', triggerAnimation);

function animationblack (){
    if (window.scrollY > 730){
        animatedElementNav.classList.add('turn-black');
        animatedElementNav2.classList.add('turn-black');
        animatedElementNav3.classList.add('turn-black');
        animatedElementNav4.classList.add('turn-black');
        animatedElement.classList.add('turn-black');
        animatedElementContact.classList.add('turn-black');    
    }
    else if (window.scrollY < 730){
        animatedElementNav.classList.remove('turn-black');
        animatedElementNav2.classList.remove('turn-black');
        animatedElementNav3.classList.remove('turn-black');
        animatedElementNav4.classList.remove('turn-black');
        animatedElement.classList.remove('turn-black');
        animatedElementContact.classList.remove('turn-black');  
    }
}
window.addEventListener('scroll', animationblack);


const targetSection = document.querySelector('.target-section');

// Use IntersectionObserver to watch the target section
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animatedElementNav.classList.add('turn-white');
                animatedElementNav2.classList.add('turn-white');
                animatedElementNav3.classList.add('turn-white');
                animatedElementNav4.classList.add('turn-white');
                animatedElement.classList.add('turn-white');
                animatedElementContact.classList.add('turn-white');              
            } else {
                animatedElementNav.classList.remove('turn-white');
                animatedElementNav2.classList.remove('turn-white');
                animatedElementNav3.classList.remove('turn-white');
                animatedElementNav4.classList.remove('turn-white');
                animatedElement.classList.remove('turn-white');
                animatedElementContact.classList.remove('turn-white');               }
        });
    },
    { threshold: 0.4} // Trigger when 50% of the section is visible
);

// Observe the target section
observer.observe(targetSection);