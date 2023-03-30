"use strict";

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
	console.log(pos)
	// console.log(pos.coords.latitude);
	// console.log(pos.coords.longitude); No muestra nuestra ubicación
}
const err = (e)=> console.log(e);

const options = {
	maxiumAge: 0,
	timeout: 3000,
	enableHightAccuracy: false //Aprovecha todo los recursos de posicionamiento para tener la mayor exactitud posible en cuanto a la localizacion
}
geolocation.getCurrentPosition(posicion,err,options)