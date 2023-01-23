const cartContainer = document.querySelector(".cart-container");
const tablebody = document.querySelector(".table-body");
const shoesContainer = document.querySelector(".shoes-container");
const shoesbox = document.querySelector(".shoes-box");
const btns = document.querySelector('.shoes-box-btn');
const totalCart = document.querySelector('.table-total ');
const totalCartcant = document.querySelector('.table-cantidad');
const wp = document.querySelector('.nav-cart-img');
const btnClear = document.querySelector('.vaciar-carrito');

let cart= [];

tablebody.addEventListener('click', e =>{
  btnAccion(e);
})

wp.addEventListener('click' , ()=>{
    cartContainer.classList.toggle("show")
})
  
btnClear.addEventListener('click', ()=>{
    cart = [];
    ClearCart();
});

shoesContainer.addEventListener('click', e =>{
    addtocCart(e);
});
  

const products = [
    {id:"1", nombre:"Jordan 4 mectalic Purple", precio: "400", image:"/Assets/jordan4.jpg"},
    {id:"2", nombre:"Jordan 1 hight blue", precio:"250", image:"/Assets/jordan1.jpg"},
    {id:"3", nombre:"Jordan 10 Retro", precio:" 150", image:"/Assets/jordan10.jpg"},
    {id:"4",nombre:"Nike Air force 1", precio:" 100", image:"/Assets/nike1.jpg"},
    {id:"5", nombre:"UnderArmour Curry MVP 2016", precio:" 500", image:"/assets/currymvp.jpg"},
    {id:"6", nombre:"Vans old Skool", precio:"200", image:"/Assets/vans.jpg"},
    {id:"7", nombre:"Adidas SuperStar", precio:"90", image:"/Assets/adidasSuperstar.jpg"},
    {id:"8", nombre:"Jordan 1 Air Dior", precio:"1000", image:"/Assets/jordanDior.jpg"},
    {id:"9", nombre:"Crocks", precio:"340", image:"/Assets/crocks.jpg"},
];



function createProducts(products){
    shoesContainer.innerHTML = '';
    products.forEach(element => {
        shoesContainer.innerHTML += `
        <div class="shoes-box">
           <div class="shoes-box-img">
            <img src="${element.image}" class="shoes-img" alt="">
           </div>
           <h2 class="shoes-box-title">${element.nombre}</h2>
           <img src="/assets/star.jpg" class="box--img" alt="">
          <div class="shoes-box-prices">
           <h3 class="shoes-box-text">Price:</h3>
           <h3 class="box-shoes-price">${element.precio}</h3>
           </div>
           <div class="box-shoes-btns">
            <button data-id="${element.id}" class="shoes-box-btn">Add to Cart<i class='bx bxs-cart-add'></i></button>
           </div>  
       </div>     
     `  
    });
 
};

function createTable(){
    tablebody.innerHTML= '';
    cart.forEach(element =>{
        let Total = element.cantidad * element.precio;
        tablebody.innerHTML += `
        
        <tr>
            <td><img src="${element.image}" class="img-table" alt=""></td>
            <td>${element.name}</td>
            <td>US$ ${element.precio}</td>
            <td>${element.cantidad}</td>
            <td>$ ${Total}</td>
            <td>
                <button class="table-btn btn-mas" data-id="${element.id}">+</button>
                <button  class="table-btn btn-menos" data-id="${element.id}">-</button>
            </td>
         </tr>
     
    `    
      
    });
    cal();
}

function cal(){
    const ncantidad = cart.reduce((acc,{cantidad})=> acc + cantidad,0);
    const ntotal = cart.reduce((acc,{cantidad, precio})=> acc + cantidad * precio,0);
    totalCartcant.textContent = ncantidad;
    totalCart.textContent = ntotal;
}

function addtocCart(e){
    if(e.target.classList.contains("shoes-box-btn")){
        setCarrito(e.target.parentElement.parentElement);
    }
    e.stopPropagation();
}

function setCarrito(objeto){
    console.log(objeto);
    const products = {
        id: objeto.querySelector('.shoes-box-btn').dataset.id,
        image: objeto.querySelector('.shoes-img').src,
        name: objeto.querySelector('.shoes-box-title').textContent,
        precio: objeto.querySelector('.box-shoes-price').textContent,
        cantidad:1,
        total: objeto.querySelector('.box-shoes-price').textContent
    }

    if(cart.hasOwnProperty(products.id)){
        products.cantidad= cart[products.id].cantidad + 1;
        //products.total = products.total * products.cantidad;
    }
    cart[products.id] = {...products}
    createTable();
   // console.log(cart);
}

function ClearCart(){
    if(cart.length === 0){
        tablebody.innerHTML = `
        <tr>
            <td class="td-clear" colspan="6">Carrito Vacio!!!</td>    
        </tr>
    `
    cal();
    return
}
}


function btnAccion(e){
    if(e.target.classList.contains('btn-mas')){
        //console.log(cart[e.target.dataset.id]);
        const products = cart[e.target.dataset.id];
        products.cantidad ++;
        cart[e.target.dataset.id] = {...products};
        createTable();

    }
    if(e.target.classList.contains('btn-menos')){
        const products = cart[e.target.dataset.id];
        products.cantidad --;
        createTable();
        if(products.cantidad === 0){
            delete cart[e.target.dataset.id];
        }
        createTable();
        ClearCart();

    }
    //e.stopPropagation();

}


createProducts(products);
ClearCart();
