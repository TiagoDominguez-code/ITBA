const nombreUsuario = document.getElementById("nombreUsuario")
const emailUsuario = document.getElementById("emailUsuario")
const mensajeUsuario = document.getElementById("mensajeUsuario")
const botonFormulario = document.getElementById("boton_formulario")
const mensajeError = document.getElementById("error")

botonFormulario.addEventListener("click", (e)=>{
    e.preventDefault()
    mensajeError.classList.remove("error")
    mensajeError.classList.remove("exito")
    mensajeError.classList.add("error")
    if (nombreUsuario.value == "") {
        mensajeError.textContent = "El nombre de usuario no puede estar vacio."
    }else if (emailUsuario.value == "" ) {
        mensajeError.textContent = "El email no puede estar vacio."
    }else if (mensajeUsuario.value == ""){
        mensajeError.textContent = "El mensaje no puede estar vacio."
    }else{
        mensajeError.classList.remove("error")
        mensajeError.classList.add("exito")
        mensajeError.textContent = "El mensaje fue enviado."
    }

})
