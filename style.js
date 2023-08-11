const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('.cont-page');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuPage.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuPage.classList.remove('open');
        menuOpen = false;
    }
});

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed")

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerWidth - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translatey(${y}px)`
    })
}