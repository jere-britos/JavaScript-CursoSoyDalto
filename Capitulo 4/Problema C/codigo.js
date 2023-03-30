let materias = {
	fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
	programacion: ["Dalto","Pedro","Juan","Pepito"],
	logica: ["Hernandez","Pedro","Juan","Pepito","Cofla","Maria"],
	quimica: ["Rodriguez","Pedro","Juan","Pepito","Cofla","Maria"]
}

const inscribir = (alumno, materia)=>{
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`);
	} else {
		personas.push(alumno)
		if (materia == "fisica"){
			materias = {
				fisica: personas,
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: materias['quimica']
			}
	}else if (materia == "programacion"){
			materias = {
				fisica: materias['fisica'],
				programacion: personas,
				logica: materias['logica'],
				quimica: materias['quimica']
			}
	}else if (materia == "logica"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: personas,
				quimica: materias['quimica']
			}
	}else if (materia == "quimica"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: personas
			}
	}	
	document.write(`!Felicidades ${alumno}¡ te has inscripto a ${materia} correctamente.`);
}
}

inscribir("Pedrito","fisica");