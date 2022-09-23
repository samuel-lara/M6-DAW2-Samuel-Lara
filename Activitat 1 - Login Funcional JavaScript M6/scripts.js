/**
 * Aquest programa valida un formulari de login,
 * si es correcte el títol LOGIN JAVASCRIPT es substituirà per CORRECTE de color verd,
 * i si el login no es correcte es substituira per ERROR de color vermell
 */

/** FUNCIO QUE VALIDA EL LOGIN*/
function validation(){
    //Variables dels inputs
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    

    //Variable que escriu misstge d'informació
    let info = document.getElementById('info');

    //Expresion regular per a validar un email
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


    if(validEmail.test(user)){
        let title = document.getElementById('title');
        const boton = document.getElementById('boton');

        //Ocultem el botó enviar per a que no s'envie l'event al servidor
        //boton.style.visibility = "hidden";
        

        title.innerHTML = 'Correcte, dirigint a la pàgina...';
        title.style.color = 'green';
        boton.disabled = true;
        
        //espera de 5 segons per a redirigir a la web de l'intitut montsià
        setTimeout(function(){
            window.location.href = "https://agora.xtec.cat/insmontsia/";
        }, 5000);


        
        //Si la validació es correcta no mostrará cap informació per pantalla, podem utilitzar style.visibility = "hidden", pero un cop es valida no torna enrere
        info.innerHTML = '';

    } else {
        title.innerHTML = 'ERROR';
        title.style.color = 'red';

        info.innerHTML = "Cal escriure un email vàlid";
    }
}


