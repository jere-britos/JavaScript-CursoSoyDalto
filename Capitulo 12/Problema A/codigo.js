const materiasHTML = document.querySelector(".materias");

const materias = [
	{
		nombre: "Fisica 4",
		nota: 7
	},{
		nombre: "Calculo 3",
		nota: 8
	},{
		nombre: "Bases de datos 3",
		nota: 9
	},{
		nombre: "Matemáticas discretas 2",
		nota: 7
	},{
		nombre: "Programación 4",
		nota: 8
	}
] //Array de Objetos

const obtenerMateria = (id)=>{
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if(materia == undefined){
			reject("La materia no existe la materia");
		} else {
			setTimeout(()=>{
				resolve(materia);
		},Math.random()*2400);
	}//Hacemos de cuenta que es un servidor
})
}

// obtenerMateria(1).then((res)=>console.log(res)); //SIN FUNCIONES ASINCRONAS

const devolverMaterias = async ()=>{
	let materia = [];
	for (let i = 0; i < materias.length; i++) {
		materia[i] = await obtenerMateria(i);
		let newHTMLCode = `<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>`;
		materiasHTML.innerHTML += newHTMLCode;
	}
}

devolverMaterias();