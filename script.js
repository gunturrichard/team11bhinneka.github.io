const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;

// munculin submenu
menuMain.addEventListener("click", (e) =>{
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});

// klik panah kembali
goBack.addEventListener("click", () =>{
  hideSubMenu();
})
// klik icon hamburger
menuTrigger.addEventListener("click", () =>{
  toggleMenu();
})
// klik icon x
closeMenu.addEventListener("click", () =>{
  toggleMenu();
})

// close menu
function toggleMenu(){
  menu.classList.toggle("active");
}

// function munculin submenu
function showSubMenu(hasChildren){
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML=menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

// function ilangin submenu
function hideSubMenu(){
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(function(){
    subMenu.classList.remove("active");
  },300);
  menu.querySelector(".current-menu-title").innerHTML="";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

// ilangin panel saat resize window
window.onresize = function(){
  if(this.innerWidth > 1100){
    if(menu.classList.contains("active")){
      toggleMenu();
    }
  }
}