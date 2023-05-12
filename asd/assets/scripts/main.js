function changeNavbar(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}



window.addEventListener('scroll', changeNavbar);