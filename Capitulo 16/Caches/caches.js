"use strict";

caches.open("archivos-estaticos");//Abrimos un nuevo objeto cache, se podria considera tmb un almacen de objetos.

caches.open("archivos-estaticos").then(cache=>{
	console.log(cache);//Muestra los objetos cache
})//Como el cache trabaja con promesas para acceder al contenido hacemos esto