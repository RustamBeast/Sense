const sectionOne = document.querySelector('.contact');
const sectionAbout = document.querySelector('.about');
const sectionAbout2 = document.querySelector('.about2');
const sections = document.querySelectorAll('section');

const options = { 
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        if (entry.target == sectionOne){
            entry.target.classList.toggle('zoom');
        }
        if (entry.target == sectionAbout || entry.target == sectionAbout2){
            entry.target.classList.toggle('zoom2');
        }
        entry.target.classList.toggle('inverse');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


