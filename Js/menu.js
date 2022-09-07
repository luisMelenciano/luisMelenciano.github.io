const wp = document.querySelector('.wp');
const menu = document.querySelector('.nav__items');



wp.addEventListener('click' , ()=>{
  menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != wp)
  {
    menu.classList.toggle("spread")

  }

})

