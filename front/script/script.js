//themeSwitch
const themeSwitch = document.querySelector("#theme")
themeSwitch.addEventListener("click", ()=>{
    const main = document.querySelector(".main");
    const ul = document.querySelector(".usefulLinks");
    const label = document.querySelector(".mottoAutor");
    main.classList.toggle("darkMain");
    ul.classList.toggle("darkLink");
    label.classList.toggle("darkLink")
    console.log(ul.classList);
    if (themeSwitch.innerHTML === "Темная тема")
        themeSwitch.innerHTML = "Cветлая тема"
    else themeSwitch.innerHTML = "Темная тема"
})

//loader
document.body.onload = ()=>{
    setTimeout(()=>{
        let preloader = document.querySelector(".preloader");
        preloader.classList.toggle("done");
    }, 1000);
}