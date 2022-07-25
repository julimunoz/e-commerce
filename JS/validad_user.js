
var formulario_login = document.getElementById("form_login");

formulario_login.addEventListener("submit", function(evento){
    
    evento.preventDefault();
    var user = formulario_login.form_login_nombre.value;
    var pass = formulario_login.form_login_password.value;;
    
    if (user == "admin@gmail.com" && pass=="admin"){

        window.location.href="productos_admin.html"
    }else {

        alert("los datos de usuario y/o contraseña no coinciden")
    }

});

