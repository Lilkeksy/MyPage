const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', function() {
    var scrollText = document.getElementById('scrollText');
    var scrollPosition = scrollText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 70;

    if (scrollPosition < screenPosition) {
        scrollText.classList.add('reveal');
    } else {
        scrollText.classList.remove('reveal');
    }
});




const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));