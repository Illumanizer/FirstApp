burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

// FOR DETECTING CHANGE IN FOCUS OF USER
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState == 'hidden') {
        document.title = "Wait! Where are you going ";
    } else {
        document.title = "MCU";
    }
})