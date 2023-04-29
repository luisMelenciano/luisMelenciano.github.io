const wp = document.querySelector('.wp');
const menu = document.querySelector('.nav__items');
const skillsSection = document.querySelector('.skill')
const progress = document.querySelector(".progress");
const progressBar = document.querySelectorAll(".progress-bar");


wp.addEventListener('click' , ()=>{
  menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != wp)
  {
    menu.classList.toggle("spread")

  }

})

function showProgress(){
  progressBar.forEach(element => {
    const value = element.dataset.progress;
    element.style.opacity =1 ;
    element.style.width = `${value}%`
    
  });
}
  
  function hideProgress() {
    progressBar.forEach(element => {
      element.style.opacity =0 ;
      element.style.width = 0
      
    });
    
}

window.addEventListener('scroll',()=>{
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const scrennPos = window.innerHeight / 2;

  if(sectionPos < scrennPos){
    showProgress();
     
  }else{

    hideProgress();
  }
})


