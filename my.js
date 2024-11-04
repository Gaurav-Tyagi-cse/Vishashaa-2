let click = document.querySelector(".click");
let nav = document.querySelector(".navigation");
let links = document.querySelector(".nav-links");

click.addEventListener('click', ()=> {
    if(nav.style.height != "100vh"){
        nav.style.height = "100vh"
        links.style.height = "100%"
        links.style.padding = "10px"
    }
    else{
        nav.style.height = "45px"
        links.style.height = "0"
        links.style.padding = "0"
    }
});