"use strict";
//Leyendo imagenes
const archivo = document.getElementById('archivo');//INPUT FILE
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files);
})

const leerArchivo = ar =>{
for (let i = 0; i < ar.length; i++) {
	const reader = new FileReader();
	reader.readAsDataURL(ar[i]);
	reader.addEventListener("load",(e)=>{
	let newImg = `<img src='${e.currentTarget.result}'>`;
	document.querySelector(".resultado").innerHTML += newImg;
	})
  }
}