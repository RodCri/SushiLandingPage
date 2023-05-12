const show = document.querySelector('#showMenu');
const menu = document.querySelector('.options__menu');
const changeTheme = document.querySelector('#changeTheme');
const closeMenu = document.querySelector('.item-close');

changeTheme.addEventListener('click', ()=>{
  console.log('lo')
})

show.addEventListener('click',()=>{
  menu.classList.remove("hidden")
  menu.classList.add("show");
})

closeMenu.addEventListener('click',()=>{
  menu.classList.remove("show");
  menu.classList.add("hidden")
})