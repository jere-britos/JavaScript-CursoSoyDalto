const nombre = document.getElementById("nombre");//ahora nombre es un objetElement de tipo INPUT
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");//sabe tirar inner null si no lo conectas bien

boton.addEventListener("click",(e)=>{
	e.preventDefault();//previene el evento
	let error = validarCampos();
	if (error[0]) {
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
	} else {
		resultado.innerHTML = "Solicitud enviada correctamente";
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
});

const validarCampos = ()=>{
	let error = [];
	if (nombre.value.length < 5 || nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre es inválido";
		return error;
	} else if (email.value.length < 5 ||
			   email.value.length > 40 ||
			   email.indexOf("@") == -1 ||
			   email.indexOf(".") == -1){
		error[0] = true;
		error[1] = "El mail es inválido";
		return error;
	} else if (materia.value < 4 || materia.value > 40){
		error[0] = true;
		error[1] = "La materia no existe";
		return error;
	}
		error[0] = false;
		return error;
}

