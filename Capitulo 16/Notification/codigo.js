"use strict";
if (!('Notification' in window)) {
	console.log("Las notificaiones no estan disponibles en tu navegador");
}
//Método que pide permiso para enviar notificaciones.
//Tiene 3 estados "Default = preguntar", permitir = granted y bloquear= denied
//esto devuelve un callback, que se va ejecutar una vez preguntado
Notification.requestPermission(()=>{
	if (Notification.permission == "granted") {
		// console.log("permiso concedido")
		new Notification("Suscribite papu");//Esto no hace falta asignarlo a una variable
	}
})