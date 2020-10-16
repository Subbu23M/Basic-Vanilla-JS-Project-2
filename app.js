// Selecting the elements

const toggleButton = document.querySelector('.toggle-button');

const navLinks = document.querySelector('.nav-links');

// Event Listener
// Ananymous function
toggleButton.addEventListener('click',function(){
    // console.log(navLinks.classList.contains('nav-links'));
    // if(navLinks.classList.contains('show-links')){
    //     navLinks.classList.remove('show-links');
    // }
    // else{
    //     navLinks.classList.add('show-links')
    // }
    
    navLinks.classList.toggle('show-links')
});