/*
- Ejercicio 1

class Celular {
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}

	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("reiniciando celular");	
		} else { 
			alert("el celular esta apagado");
		}
	}

	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}

	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}

	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		`;
	}
}

class CelularAltaGama extends Celular{
	constructor(color,peso,tamaño,rdc,ram,rcde){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rcde;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara Extra: <b>${this.resolucionDeCamaraExtra}</b>`
	}
}

//celular1 = new Celular("rojo","150g","5","hd","1GB");
//celular2 = new Celular("negro","155g","5.4","full hd","2GB");
//celular3 = new Celular("blanco","146g","5.9","full hd","2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","FULL HD");
celular2 = new CelularAltaGama("negro","142g","6","4K","4GB","HD");


document.write(`
	${celular1.infoAltaGama()} <br><br>
	${celular2.infoAltaGama()} <br>
	`);

- Ejercicio 2
*/
class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	instalar(){
		if (this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert("app desintalada correctamente")
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert("app encendida"); 
		}
	}

	cerrar(){
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("app cerrada"); 
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuacion: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>
		`
	}
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","4.5 estrellas","100mb");
app4 = new App("23.000","4.8 estrellas","1GB");
app5 = new App("900","5 estrellas","250mb");
app6 = new App("17","3.7 estrellas","522mb");
app7 = new App("42.981","2.9 estrellas","723mb");


document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);





//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();
