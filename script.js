let navBar = document.querySelector("#nav-bar") ;
let menuBar = document.querySelector(".fa-bars") ;

menuBar.onclick = function(){
    navBar.classList.toggle('hidemenu');
}