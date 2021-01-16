

const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('.sidebar nav ul')

navBurger.addEventListener('click', ()=>{
    
    navContent.classList.toggle('active')


})

const navLinks = document.querySelectorAll('.sidebar nav ul li')

navLinks.forEach(li => {
    li.addEventListener('click', ()=>{
        navContent.classList.toggle('active')
    })
})