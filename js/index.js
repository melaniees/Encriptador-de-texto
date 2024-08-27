let btnEncriptar = document.querySelector(".btnEncriptar");
let btnDesencriptar = document.querySelector(".btnDesencriptar");
let btnCopiar = document.querySelector(".btnCopiar");
let msjEncriptar = document.querySelector(".msjEncriptar");
let aviso = document.querySelector(".textoAviso");
let respuesta = document.querySelector(".evaluar");
let contenido = document.querySelector(".contenidoTextoMuneco");

//--------------------- BTN ENCRIPTAR ---------------------//
btnEncriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = msjEncriptar.value;
    //console.log(texto);
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    if(texto == ""){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo no debe estar vacío";
    } else if( texto !== txt){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos y caracteres especiales";
    }else if (texto !== texto.toLowerCase()){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto solo debe contener minúculas";
    }
    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"; 
        contenido.remove();
    }
    
})

//--------------------- BTN DESENCRIPTAR ---------------------//
btnDesencriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = msjEncriptar.value;
    //console.log(texto);
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    if(texto == ""){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo no debe estar vacío";
    } else if( texto !== txt){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos y caracteres especiales";
    }else if (texto !== texto.toLowerCase()){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto solo debe contener minúculas";
    }
    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"; 
        contenido.remove();
    }
    
})

//--------------------- BTN COPIAR ---------------------//
btnCopiar.addEventListener("click", e =>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})   