const cero = document.getElementById("cero");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seix = document.getElementById("seix");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const diez = document.getElementById("diez");
const sum = document.getElementById("sum");
const multi = document.getElementById("multi");
const div = document.getElementById("div");
const restar = document.getElementById("restar");
const punto = document.getElementById("punto");
const igual = document.getElementById("igual");
const ac = document.getElementById("ac");
const display = document.getElementById("inpunt_text")

let numeroA = 0;
let numeroB = 0;
let operacion = 0;

uno.addEventListener("click",()=>{
    display.textContent = display.textContent + "1";
})

dos.addEventListener("click",()=>{
    display.textContent = display.textContent + "2";
})

tres.addEventListener("click",()=>{
    display.textContent = display.textContent + "3";
})

cuatro.addEventListener("click",()=>{
    display.textContent = display.textContent + "4";
})

cinco.addEventListener("click",()=>{
    display.textContent = display.textContent + "5";
})

seix.addEventListener("click",()=>{
    display.textContent = display.textContent + "6";
})

siete.addEventListener("click",()=>{
    display.textContent = display.textContent + "7";
})

ocho.addEventListener("click",()=>{
    display.textContent = display.textContent + "8";
})

nueve.addEventListener("click",()=>{
    display.textContent = display.textContent + "9";
})

cero.addEventListener("click",()=>{
    display.textContent = display.textContent + "0";
})

ac.addEventListener("click",()=>{
    reset();
})

sum.addEventListener("click", ()=>{
    numeroA = display.textContent;
    operacion = "+";
    limpiar();
})

restar.addEventListener("click", ()=>{
    numeroA = display.textContent;
    operacion = "-";
    limpiar();
})

div.addEventListener("click", ()=>{
    numeroA = display.textContent;
    operacion = "/";
    limpiar();
})

multi.addEventListener("click", ()=>{
    numeroA = display.textContent;
    operacion = "*";
    limpiar();
})

igual.addEventListener("click", ()=>{
    numeroB = display.textContent;
    calcular();
})

function limpiar(){
    display.textContent = "";
}

function reset() {
    display.textContent = ""
    numeroA =0 
    numeroB = 0
    operacion =""
    
}

function calcular() {
    let result =0
    switch (operacion) {
        case "+":
            result= parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            result= parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            result= parseFloat(numeroA) * parseFloat(numeroB);
            break;

        case "/":
             result= parseFloat(numeroA) / parseFloat(numeroB);
             break;
    
        default:
            break;
    }

    reset()
    display.textContent = result
    
}