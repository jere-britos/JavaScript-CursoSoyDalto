/*
Ejercicio 1

let free = false;

const validarCliente = (time) =>{
	let edad = prompt("Cual es tu edad?")
	if (edad > 18) {
		if (time >= 2 && time < 7 && !free) {
			alert("podes pasar gratis");
			free = true; //Bandera que marca que solo 1 pasara gratis
		} else {
			alert(`podes pasar, pero tenes que pagar la entrada por la hora ${time}`)
		}
	} else {
		alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA")
	}
}

validarCliente(1);
validarCliente(2); //aca insertamos la hora, la otra info se inserta por el navegador
validarCliente(2.3);
validarCliente(4);
validarCliente(8);


Ejercicio 2

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for(i = 0;i < cantidad; i++){
	alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0]; //[Nombre, dias] [jeremias, 0]
}

const tomarAsistencia = (nombre, p)=>{
	let presencia = prompt(nombre); // Jeremias = presente o ausente?
	if (presencia == "p" || presencia == "P" ){
		alumnosTotales[p][1]++; //[p][1] = dias del alumno presentes
	}	
}

for(i = 0; i < 30; i++){
	for (alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
	________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
	if (30 - alumnosTotales[alumno][1] > 18){
	resultado += " REPROBADO POR INASISTENCIA <br> <br>";
}else{
	resultado += "<br> <br>";
}
document.write(resultado);
}

Ejercicio 3

const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2);
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if(operacion == 1){
	let numero1 = prompt("primer numero para sumar");
	let numero2 = prompt("segundo numero para sumar");
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if(operacion == 2){
	let numero1 = prompt("primer numero para restar");
	let numero2 = prompt("segundo numero para restar");
	resultado = restar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if(operacion == 3){
	let numero1 = prompt("primer numero para dividir");
	let numero2 = prompt("segundo numero para dividir");
	resultado = dividir(numero1,numero2);
	alert(`tu resultado es ${resultado}`);

}
else if(operacion == 4){
	let numero1 = prompt("primer numero para multiplicar");
	let numero2 = prompt("segundo numero para multiplicar");
	resultado = multiplicar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}else{
	alert("no se ha encontrado la operacion");
}

/*
*/



