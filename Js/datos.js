const swiperWrapper = document.querySelector('.swiper-wrapper')


const portafolio = [
     {id:"1",imagen:"/Assets/landiLogo.png",title:"Landin Pages",subtitle:"pagina web moderna realizada con html y Css.",link:"https://incredible-trifle-12117b.netlify.app/"},
     {id:"2",imagen:"/Assets/webspace.png",title:"Space Web",subtitle:"Una web moderna inspirada en el maraviloso espacio.",link:"https://webpagesite.netlify.app/"},
     {id:"3",imagen:"/Assets/memorylogo.png" ,title:"Memory Games",subtitle:"Divertido juego de memoria hecho con JavaScript.",link:"https://fastidious-baklava-8c4c23.netlify.app/"},
     {id:"4",imagen: "Assets/pikachu.png",title:"Pokedex",subtitle:"Una pokedex de pokemon totalmente con JavaScript.",link:"https://regal-rabanadas-c084bd.netlify.app/"},
     {id:"5",imagen:"Assets/shoes.png",title:"E-commerce",subtitle:"This is an E-commerce of a shoe store",link:"https://astounding-baklava-7e1866.netlify.app/"},
     {id:"6",imagen:"/Assets/wheaterappp.png",title:"Wheater App",subtitle:"Consumiendo 2 Api diferentes del clima.",link:"https://profound-chaja-26f5f7.netlify.app/"},
     {id:"7",imagen: "Assets/tic.png",title:"Tic Tac Toe",subtitle:"El famoso Tic Tac Toe realizado con React.",link:"https://resplendent-sunburst-b7a597.netlify.app/"},
     {id:"8",imagen:"Assets/movilm.png",title:"MovieLM ",subtitle:"Sitio web de peliculas, consumiendo la API de TheMovieDB con React.JS.",link:"https://themovielm.netlify.app/"},
     {id:"9",imagen:"Assets/hodiee.png",title:"Hodiee ",subtitle:"Mi propia red social realizada con React.JS, seguidores, publicaciones, perfiles.etc",link:"https://hodiee.netlify.app/"}

]

function Generar(){
    portafolio.forEach(element=>{
        swiperWrapper.innerHTML += `
          
        <div class="swiper-slide" >
           <div class="slide-img">
                  <img src= "${element.imagen}" class="cal--img" />
           </div>
            <div  class="line-slide"></div>
            <div class="slide-text">
                 <h3>${element.title}</h3>
                 <p>${element.subtitle}</p>
                 <a href="${element.link}" target="_blank" rel="noopener noreferrer" >Visitar</a>
            </div>
       </div> 
        
        `
    })

}

Generar();