function scrollToHome() {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
        homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToServices() {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToWorks() {
    const worksSection = document.getElementById('works');
    if (worksSection) {
        worksSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContactSection() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContact() {
    const contactBtn = document.querySelector('.big-contact');
    if (contactBtn) {
        contactBtn.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactModal();
    }
});


let scrollHideTimeout;

window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const aboutSection = document.getElementById('about-section');
    
    if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        
       
        if (aboutPosition < window.innerHeight / 2 || window.scrollY > 500) {
            scrollBtn.classList.add('visible');
            
            
            clearTimeout(scrollHideTimeout);
            
            
            scrollHideTimeout = setTimeout(function() {
                scrollBtn.classList.remove('visible');
            }, 2000);
        } else {
            scrollBtn.classList.remove('visible');
            clearTimeout(scrollHideTimeout);
        }
    }
});
