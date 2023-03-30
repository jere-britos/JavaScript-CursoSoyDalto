alumnos = [{
	nombre: "Lucas Dalto",
	email: "soydalto@gmail.com",
	materia: "Fisica 3"
},{
	nombre: "Karim Guerra",
	email: "karim@gmail.com",
	materia: "Fisica 1"
},{
	nombre: "Jorge Ramirez",
	email: "ramirez@gmail.com",
	materia: "Cálulo 2"
},{
	nombre: "Facundo Roberto",
	email: "rober@gmail.com",
	materia: "Literatura"
},{
	nombre: "Coffla XD",
	email: "cofla@gmail.com",
	materia: "Recreo"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
	// console.log(alumnos[alumno]);//Muestra el array de objetos.
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia	= datos["materia"];
	let htmlCode = `
	<div class="grid-item nombre">${nombre}</div>
	<div class="grid-item email">${email}</div>
	<div class="grid-item materia">${materia}</div>
	<div class="grid-item semana">
		<select class="semana-elegida">
			<option value="Semana 1">Semana 1</option>
			<option value="Semana 2">Semana 2</option>
		</select>
	</div>`;
	contenedor.innerHTML+= htmlCode;//cada vez que gire el for, se le va a ir agregando este codigo al CONTENEDOR.
}

boton.addEventListener("click",()=>{
	let confirmar = confirm("¿realmente quieres confirmar las mesas?");
	if (confirmar) {
	document.body.removeChild(boton);	
	let elementos = document.querySelectorAll(".semana");//NodeList o Array de div ||grid-item semana|| con por ejemplo "semana tanto".
	let semanasElegidas = document.querySelectorAll(".semana-elegida");//NodeList o array de "Select" de todas las semanas elegidas.
	for (elemento in elementos){
		// console.log(elemento);//es el indice numerico, tiene que ser "of" para contener un valor.
		let semana = elementos[elemento];//semana = se transforma en object element div semana, con el select.
		semana.innerHTML = semanasElegidas[elemento].value;//transforma la etiqueta "select", en el valor que contenga. 
	}
}
})












