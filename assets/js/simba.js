const showMenu = (toggleld, navid) => {
    const toggle = document.getElementById(toggleld),
    nav = document.getElementById(navid)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*=== ACTIVE AND REMOVE MENU ===*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== SCROLL REVEAL ANIMATION ====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/* SCROLL ABOUT */
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.home_text',{delay: 200})

/* SKILLS */
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 400})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('skills_img', {delay: 400})

/* WORK */
sr.reveal('.work_img',{interval: 200})

/* CONTACT */
sr.reveal('.contact_input',{interval: 200})