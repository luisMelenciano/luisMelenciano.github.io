const carContainer = document.querySelector('.card-container')
const cardAfter = document.querySelector('.card-after')
const cardBefore = document.querySelector('.card-before')
const pNumero = document.querySelector('.card-numero-tarjeta')
const inpuntNumero = document.getElementById('inputnumero');
const pName = document.querySelector('.card-nombre-tarjeta')
const inpuntName = document.getElementById('inputnombre');
const pfirma = document.querySelector('.p-firma');
const pccv = document.querySelector('.p-ccv');
const inpuntCCV = document.getElementById('inputCcv');
const selectMes = document.getElementById('select-mes');
const selectDia = document.getElementById('select-año');
const mes = document.querySelector('.mes');
const year = document.querySelector(".year")
const btnEnviar = document.querySelector('.btn-enviar')
const body = document.querySelector(".hide");
const img = document.querySelector(".img-hide");




window.addEventListener("load",()=>{
    llenarSelectMes();
    llenarSelectDia();

})
 

   


cardAfter.addEventListener('click', ()=>{
    carContainer.classList.add("flipped")

});

cardBefore.addEventListener('click', ()=>{
    carContainer.classList.remove("flipped")

})

inpuntNumero.addEventListener('keyup' ,(e)=>{
   let value = e.target.value
   inpuntNumero.value = value.replace(/\s/g, '')
   .replace(/\D/g,'')
   .replace(/([0-9]{4})/g, '$1 ').trim();
    mostrar();
    pNumero.textContent = value
    if(value ===""){
       pNumero.textContent = "1001 2002 3003 4004"

    }
 
});

inpuntName.addEventListener('keyup',(e)=>{
    let value = e.target.value
    inpuntName.value = value.replace(/[0-9]/g, '')
    mostrar();
    pName.textContent = value
    pfirma.textContent = value
    if(value ===""){
        pName.textContent ="Luis Melenciano"
        pfirma.textContent = "Luis Melenciano"

    }
 
})

inpuntCCV.addEventListener('input',(e)=>{
    if(carContainer.classList.contains("flipped")){
        carContainer.classList.add("flipped");
        pccv.textContent = inpuntCCV.value;
        
    }
    else{
        carContainer.classList.add("flipped")
        pccv.textContent = inpuntCCV.value;

    }
})

selectMes.addEventListener('change',(e)=>{
    mes.textContent = e.target.value
    mostrar();
})

selectDia.addEventListener('change' , (e)=>{
    year.textContent = e.target.value.slice(2);
    mostrar();

})

function llenarSelectMes() {
    for (let i = 0; i <=12; i++) {
        let opcion = document.createElement('option');
        opcion.value = i
        opcion.innerHTML = i
        selectMes.appendChild(opcion);    
    }  
}

function llenarSelectDia() {
    const years = new Date().getFullYear();
    for (let i = years; i <=years + 6; i++) {
        let opcion = document.createElement('option');
        opcion.value = i
        opcion.innerHTML = i
        selectDia.appendChild(opcion);    
    }  
}

function mostrar() {
    if(carContainer.classList.contains("flipped")){
        carContainer.classList.remove("flipped");
       
  }   
}


btnEnviar.addEventListener('click',()=>{
     body.classList.add("show")
     carContainer.classList.add("rotate")
})

img.addEventListener('click',()=>{
       body.classList.remove("show")
       carContainer.classList.remove("rotate")
})




