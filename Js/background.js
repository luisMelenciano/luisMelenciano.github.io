const imagenes = document.querySelectorAll('.id__img');
const imagenligt = document.querySelector('.Add__img');
const contenedorlight = document.querySelector('.Previuw');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
     
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imagenligt)
    {
        contenedorlight.classList.toggle('show');
        imagenligt.classList.toggle('show__imagen')
    }
})



const aparecerimagen = (imagen)=>
{
    imagenligt.src = imagen;
    contenedorlight.classList.toggle('show')
    imagenligt.classList.toggle('show__imagen')
}