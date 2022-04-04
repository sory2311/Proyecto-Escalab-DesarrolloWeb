function validateForm(){
    var nombre = document.getElementById("name_contact").value;
    var correo = document.getElementById("email_contact").value;
    var tel = document.getElementById("tel_contact").value;
    var opcion = document.getElementById("option_contact").value;
    var mensaje = document.getElementById("comment_contact").value;
    var validacion = false;
    //condicional para el campo de nombre
    if(nombre != ''){
        //HAGO ALGO
        document.getElementById("name_contact").classList.remove("errorForm");
        document.getElementById("name_contact").classList.add("successForm");
        validacion = false;
    }else{
        //HAGO OTRA COSA
        document.getElementById("name_contact").classList.remove("successForm");
        document.getElementById("name_contact").classList.add("errorForm");
        validacion = true;
    }

    //CONDICIONAL PARA CORREO
    if(correo != ''){

        if(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo)){

            document.getElementById("email_contact").classList.remove("errorForm");
            document.getElementById("email_contact").classList.add("successForm");
            validacion = false;
        }else{
            document.getElementById("email_contact").classList.remove("successForm");
            document.getElementById("email_contact").classList.add("errorForm");
            document.getElementById("error-email").innerHTML = "El correo no tiene la estructura correcta";
            validacion = true;
        }
    }else{
        document.getElementById("email_contact").classList.remove("successForm");
        document.getElementById("email_contact").classList.add("errorForm");
        validacion = true;
    }

    //CONDICIONAL PARA EL NUMERO DE TELEFONO
    if(tel != ''){

        if(tel.length > 10){
            document.getElementById("error-tel").innerHTML = "Requiere un maximo de 8 caracteres";
            document.getElementById("tel_contact").classList.remove("successForm");
            document.getElementById("tel_contact").classList.add("errorForm");
            validacion = false;

        }else{
            document.getElementById("tel_contact").classList.remove("errorForm");
            document.getElementById("tel_contact").classList.add("successForm");
            validacion = true;
        }


        
    }else{
        document.getElementById("tel_contact").classList.remove("successForm");
        document.getElementById("tel_contact").classList.add("errorForm");
        validacion = true;
    }

    //CONDICIONAL PARA LOS COMENTARIOS
    if(mensaje != ''){
        document.getElementById("comment_contact").classList.remove("errorForm");
        document.getElementById("comment_contact").classList.add("successForm");
        validacion = false;
    }else{
        document.getElementById("comment_contact").classList.remove("successForm");
        document.getElementById("comment_contact").classList.add("errorForm");
        validacion = true;
    }

    if(!validacion){
        alert("Mensaje enviado correctamente")
    }
}