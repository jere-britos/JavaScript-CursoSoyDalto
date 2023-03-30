"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name,content) => {
	const container = document.createElement("DIV");
	const comentarios = document.createElement("DIV");
	const nombre = document.createElement("H3");
	const contenido = document.createElement("P");
	const btnComentario = document.createElement("INPUT");
	const btnEnviar = document.createElement("INPUT");

	container.classList.add("publicacion");
	comentarios.classList.add("comentarios");
	btnEnviar.classList.add("enviar");
	btnComentario.classList.add("comentario");

	btnComentario.setAttribute("placeholder","Introduce un comentario");
	nombre.textContent = name;//parametro
	contenido.textContent = content;

	btnEnviar.type = "submit";

	comentarios.appendChild(btnComentario);
	comentarios.appendChild(btnEnviar);

	container.appendChild(nombre);
	container.appendChild(contenido);

	return container
}

const cargarMasPublis = entries =>{
	if (entry[0].isIntersecting) cargarPublicaciones(4);
}

const observer = new IntersectionObserver(cargarMasPublis);

const cargarPublicaciones = async num =>{
	const request = await fetch("informacion.txt");
	const content = await request.json();//se deja terminar la promesa
	const arr = content.content;
	const documentFragment = document.createDocumentFragment();
	for (let i = 0; i < num; i++) {
		if (arr[contador] != undefined) {
		const newPublicacion = createPublicationCode(arr[contador].name,arr[contador].contenido);
		documentFragment.appendChild(newPublicacion);
		contador++;
		if (i == num-1) observer.observe(newPublicacion);
	
		} else {
			let noMore = document.createElement("H3");
			noMore.textContent = "No hay mas publicaciones";
			documentFragment.appendChild(noMore);
			publicaciones.appendChild(documentFragment);
			break;
		}
	}
	publicaciones.appendChild(documentFragment);
}

cargarPublicaciones(5)