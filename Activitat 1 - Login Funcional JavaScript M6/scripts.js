/**
 * Aquest programa valida un formulari de login,
 * si es correcte el títol LOGIN JAVASCRIPT es substituirà per CORRECTE de color verd,
 * i si el login no es correcte es substituira per ERROR de color vermell
 */


//CONTANTE QUE SELECCIONA EL BOTÓN
const boton = document.getElementById('boton');

//Expresion regular per a validar un email
let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


//Función que mueve el botón
function moverBoton(){
    //Script jQuery animación botón
    var changeLeft = (Math.random() * ($(window).width() - $("button").width()));
    $("button").css("margin-left", changeLeft + "px");
    boton.style.backgroundColor = "red"
}

//Boton llama al evento moverBoton cuando el raton pasa por encima
boton.addEventListener("mouseover", moverBoton);



/* FUNCION DE ONBLUR QUE COMPARA LOS DATOS DE UN CAMPO CON EL OTRO */
function validarCampo(){
    //Variables dels inputs
    if(password.length!=0){
        boton.removeEventListener("mouseover", moverBoton);
        boton.style.marginLeft = "0px";
        boton.style.backgroundColor = "green"
    }
}


/** FUNCIO QUE VALIDA EL LOGIN*/
function validation(){

    //Variables dels inputs
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;


    //Variable que escriu misstge d'informació
    let info = document.getElementById('info');
    
    if(validEmail.test(user) && password.length!=0){
        let title = document.getElementById('title');
        
        title.innerHTML = 'Correcte, dirigint a la pàgina...';
        title.style.color = 'green';
        boton.disabled = true;
        boton.style.opacity = 0.3;
        
        //espera de 5 segons per a redirigir a la web de l'intitut montsià
        setTimeout(function(){
            window.location.href = "https://agora.xtec.cat/insmontsia/";
        }, 5000);


        
        //Si la validació es correcta no mostrará cap informació per pantalla, podem utilitzar style.visibility = "hidden", pero un cop es valida no torna enrere
        info.innerHTML = '';

    } else {
        title.innerHTML = 'ERROR';
        title.style.color = 'red';
        info.innerHTML = "Cal escriure un email o una contrasenya vàlida";
        boton.addEventListener("mouseover", moverBoton);
    }
    
}


