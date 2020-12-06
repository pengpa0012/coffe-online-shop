

const navBurger = document.querySelector('.nav-burger')


navBurger.addEventListener('click', ()=>{

    const nav = document.querySelector('.sidebar nav')
    const logo = document.querySelector('.sidebar .logo')
    const sideFooter = document.querySelector('.sidebar .footer')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    const sidebar = document.querySelector('.sidebar')

    nav.classList.toggle('active')
    logo.classList.toggle('active')
    sideFooter.classList.toggle('active')
    main.classList.toggle('active')
    footer.classList.toggle('active')
    sidebar.classList.toggle('active')
})