/*Créer un formulaire demandant un mot de passe et une confirmation de mot de passe et comportant un bouton.
Au clic sur le bouton, si les deux champs sont identiques, les entourer de vert. Sinon les entourer en rouge.*/

function verifyPassword(){
    //let password = document.getElementById("password").value;
    //console.log(password);
    let elementPassword = document.getElementById("password");
    let elementPasswordConfirm = document.getElementById("passwordConfirm");
    //console.log(password);
    //console.log(elementPassword.value);
    
    if(elementPassword.value == elementPasswordConfirm.value){
       // console.log("c'est identique");
       elementPassword.style.borderColor="green";
       elementPasswordConfirm.style.borderColor="green";
    }
    else {
        elementPassword.style.borderColor="red";
        elementPasswordConfirm.style.borderColor="red"; 
        }
    }

