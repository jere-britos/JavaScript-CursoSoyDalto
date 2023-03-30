"use strict";
//Cada vez que se pasa por la caja3, se dispara una señal de intersecting "true"
const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) => {//Este metodo se llena con "IntersectionObserver"
  // const entry = entries[0];//Parametro se lee de forma Array
  // console.log(entry.isIntersecting)//Muestra el intersection entre las cajas
  	for (const entry of entries) {
  		if (entry.isIntersecting) console.log("se está viendo la caja: ",entry.target.textContent);
  	}
}

const options = {
	// root: //toma un elemento como referencia
	rootMargin: "30px",//se amplia el rango y lo ve 30px antes
	treshold: 1//apenas se toca
}
//IntersectionObserver esto recibe dos parametros, callback y options
const observer = new IntersectionObserver(verifyVisibility);
//"observe" lo que hace es observar el elemento que le digamos
// observer.observe(caja3);

for (const caja of cajas) {//Muestra los HTML de las cajas
	observer.observe(caja);
}