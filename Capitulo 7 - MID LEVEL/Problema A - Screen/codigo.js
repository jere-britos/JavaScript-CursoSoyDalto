
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth; //alto y ancho de una pantalla

comprar = confirm(`El alto es: ${alto}, el Ancho es: ${ancho}`);

if (comprar) {
	alert("compra realizada exitosamente");
}else{
	alert("compra cancelada");
}