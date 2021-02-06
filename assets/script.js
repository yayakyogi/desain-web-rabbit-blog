const menu = document.querySelector(".menu");
    const button = document.querySelector(".icons");
    const menubtn = document.querySelector(".menubtn");
    const menuclose = document.querySelector(".close");

    button.addEventListener("click",function(){
      menu.classList.toggle("showMenu");
      menubtn.classList.toggle("hideMenubtn");
      menuclose.classList.toggle("showMenuclose");
    });