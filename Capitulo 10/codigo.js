const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
	let resultado, mensaje;
	try {
		prevRes = parseInt(document.getElementById('nota').value); //El valor de ELEMENT, guarda en "prevRes"
		if (isNaN(prevRes)){ //TRUE si es valor dado es NaN, de otro modo, FALSE
			throw "Gracioso"; //Lanzo una excepción a la "(e)"
		}
		resultado = verificarAprobacion(8,5,prevRes); //<span >APROBADO O DESAPROBADO</span>
		mensaje = definirMensaje(prevRes); //Mensaje de los resultados.
	}catch(e){
		resultado = "¿SOS GRACIOSO?";
		mensaje = "He descubierto que intentaste hackear el sitio";
	}
	abrirModal(resultado,mensaje); //Luego de cargar todos los parametros vacios, se ejecuta la función
});

const definirMensaje = (pr)=>{
	switch (pr) {
		case 1: resultado = "No podes ser tan HDP";
		break;
		case 2: resultado = "Sos malisimo para mi materia";
		break;
		case 3: resultado = "No sabes casi nada";
		break;
		case 4: resultado = "Muy mal";
		break;
		case 5: resultado = "Mal";
		break;
		case 6: resultado = "Regular";
		break;
		case 7: resultado = "Bien, pero puede mejorar";
		break;
		case 8: resultado = "¡Muy bien!";
		break;
		case 9: resultado = "¡Excelente!";
		break;
		case 10: resultado = "¡Insuperable hijo de su pinshi madre!";
		break;
		default: resultado = null;
	}
	return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
	promedio = (nota1 + nota2 + prevRes) / 3;

	if (promedio >= 7) {
		return "<span class='green'>APROBADO</span>";
	}
		return "<span class='red'>DESAPROBADO</span>";
}


const abrirModal = (res,msg)=>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex"; //Cambiaria el style.display de "none" a "flex"
	modal.style.animation = "aparecer 1s forwards"; //Insertaria a animación
}



