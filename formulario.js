const nombre = document.getElementById('nombre')
const telefono = document.getElementById('telefono')
const cedula = document.getElementById('cedula')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit", e=>{
    e.preventDefault();
    checkInputs();
})
telefono.addEventListener("keyup", function(){
    if (telefono.value == ""){
       telefono.value = "3";
    }
    telefono.value = telefono.value.replace(regex,"");
})

function checkInputs(){
    const nombreValue = nombre.value.trim();
    const telefonoValue = telefono.value.trim();
    const cedulaValue = cedula.value.trim();

    if(nombreValue.charAt(0) !== nombreValue.charAt(0).toUpperCase()){
        setErrorFor(nombre,'El nombre debe iniciar en Mayuscula')
     }else{
         setSuccessFor(nombre);
     }
     if(!(/^\d{10}$/.test(telefonoValue)) ){
        setErrorFor(telefono, 'El telefono debe contner 10 numeros y empezar por 3')
     }else{
         setSuccessFor(telefono);
     }
     if(cedulaValue < 1000000){
        setErrorFor(cedula, 'La cedula debe ser mayor a 1.000.000')
     }else{
         setSuccessFor(cedula);
     }
    
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'input-text error';
    small.innerText = message;

}
function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className = 'input-text success'

}
