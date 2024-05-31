var slideImage = document.getElementById('slideImage');

var images = new Array(
    
    "assets/backgorund1.jpg",
    "assets/backgorund2.jpg",
    "assets/backgorund3.jpg",
    "assets/room.jpg"
);

var len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImage.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}

function homePage(){
    window.location = 'index.html'
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('change');
    navLinks.classList.toggle('showing');
})