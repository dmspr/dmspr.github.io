// typing
let typed = new Typed(".type", {
    strings: ["Web Developer", "JavaScript", "Python", "Bootstrap", "ReactJS", "NodeJS", "Express", "SQL","Surveying", "Geospatial"],
    typeSpeed: 100,
    BackSpeed: 60,
    // cursorChar: '',
    loop: true,

})

// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode")
// }

// function darkMode() {
//     document.body.classList.toggle("dark-mode")
// }


// dark-mode
if (localStorage.getItem('theme') == 'dark') {
    darkMode()
}
function darkMode() {
    let isDark = document.body.classList.toggle("dark-mode")
    if (isDark) {
        emoticon = '<i class="bi bi-moon-fill"></i>'
        localStorage.setItem('theme', 'dark')
    } else {
        emoticon = '<i class="bi bi-brightness-high"></i>'
        localStorage.removeItem('theme')
    }
    document.getElementById('darkBtn').innerHTML = emoticon
}