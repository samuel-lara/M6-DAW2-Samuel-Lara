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
    
    if(user.length != 0 && password.length != 0){
        let title = document.getElementById('title');
        title.innerHTML = 'CORRECTE';
        title.style.color = 'green';

        //Si la validació es correcta no mostrará cap informació per pantalla, podem utilitzar style.visibility = "hidden", pero un cop es valida no torna enrere
        info.innerHTML = '';
    } else {
        title.innerHTML = 'ERROR';
        title.style.color = 'red';

        if(user.length != 0 && password.length === 0){
            info.innerHTML = "Cal escriure una contrasenya vàlida";
        } else if (user.length === 0 && password.length != 0){
            info.innerHTML = "Cal escriure un nom d'usuari vàlid";
        } else {
            info.innerHTML = "Cal escriure un nom d'usuari i contrasenya vàlids";
        } 
    }
}
