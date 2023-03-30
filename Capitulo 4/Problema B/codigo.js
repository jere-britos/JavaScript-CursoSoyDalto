const obtenerInformacion = (materia)=>{
	materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
	if (materias[materia] !== undefined){
		return [materias[materia], materia, materias]; //[lista de nombre], [nombre materia], [array completo]
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);
	if (informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
			Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion){
		if (informacion[info].includes(alumno)){ //esta cofla ? devuelve bool
			cantidadTotal++;
			clasesPresentes.push(" "+ info);//push es una funcion de array, que agrega al ultimo en un nuevo array.
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases : <b style='color:green'>${clasesPresentes}</b><br>`;
}

let materia = prompt("Ingresar materia");
mostrarInformacion(materia);

let alumno = prompt("Ingresar alumno");
document.write(cantidadDeClases(alumno));