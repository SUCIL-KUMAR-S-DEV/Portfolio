let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function myFunction(optionGiven) {
    switch (optionGiven) {
        case 1:
            window.location.href = "https://sucil-kumar-s-dev.github.io/Certificates/";
            break;
            
        case 2:
            window.location.href = "https://sucil-kumar-s-dev.github.io/To-Do-List/";
            break;

        case 3:
            window.location.href = "https://sucil-kumar-s-dev.github.io/Calculator/";
            break;

        case 4:
            window.location.href = "https://sucil-kumar-s-dev.github.io/Ball-Game/";
            break;

        case 5:
            window.location.href = "#";
            break;

        case 6:
            window.location.href = "#";
            break;
    
        default:
            break;
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };  
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};
ScrollReveal({
    distance: '80px',
    duriation: 2000,
    delay: 200,
});
ScroolReveal().reveal('.home-content, heading', { orgin: 'top' });
ScroolReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { orgin: 'bottom' });
ScroolReveal().reveal('.home-content h1, .about-img', { orgin: 'left' });
ScroolReveal().reveal('.home-content p, .about-content', { orgin: 'right' });
