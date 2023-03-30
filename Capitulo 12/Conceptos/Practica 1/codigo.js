// class Persona {
// 	constructor(nombre,instagram){
// 		this.nombre = nombre;
// 		this.instagram = instagram;
// 	}
// };

// const data = [
// 	["Lucas Dalto","@SoyDalto"],
// 	["Robertico","@Robertico"],
// 	["RancioRamirez","@RancioRamirez"],
// 	["Camila Nesa"],
// ];

// const personas = [];

// for(let i = 0; i < data.length; i++){ // "data.length devuelve un numero de todos los arrays"
// 	personas[i] = new Persona(data[i][0],data[i][1]); 
// carga el constructor con los datos, "personas[i]" guarda los objetos.
// }

// const obtenerPersona = (id,cb)=>{
// 	if(personas[id] == undefined){ //si esta definido o no, se ejecuta el callback "cb".
// 		cb("No se ha encontrado la persona");
// 	} else {
// 		cb(null,personas[id],id);//no hace falta retornar
// 	}
// }

// const obtenerInstagram = (id,cb)=>{
// 	if (personas[id].instagram == undefined) {
// 		cb("No se ha encontrado el instagram");
// 	} else {
// 		cb(null,personas[id].instagram);
// 	}
// }

// obtenerPersona(2,(err,persona,id)=>{
// 	if (err){
// 		console.log(err);
//  } else {
// 		console.log(persona.nombre);
// 	obtenerInstagram(id,(err,instagram)=>{
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(instagram);	
// 	}
// })
// 	}
// });

class Persona {
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
};

const data = [
	["Lucas Dalto","@SoyDalto"],
	["Robertico","@Robertico"],
	["RancioRamirez","@RancioRamirez"],
	["Camila Nesa"],
];

const personas = [];

for(let i = 0; i < data.length; i++){
	personas[i] = new Persona(data[i][0],data[i][1]);
	// console.log(personas[i]);
	// console.log(typeof(personas[i]));
}

const obtenerPersona = (id)=>{
	return new Promise((resolve,reject)=>{
		if (personas[id] == undefined){
		reject("No se ha encontrado la persona");
		} else {
		resolve(personas[id]);
		}
	})
}

const obtenerInstagram = (id)=>{
	return new Promise((resolve,reject)=>{
		if (personas[id].instagram == undefined){
		reject("No se ha encontrado el instagram");	
		} else {
	    resolve(personas[id].instagram);
		}
	})
}

let id = 0;
obtenerPersona(id).then((persona)=>{//devuelve una promesa, y con el then sacamos los datos encapsulados
	console.log(persona.nombre);
	return obtenerInstagram(id);// 1er "then" se convierte en promesa, y el "id" se usa el "let id"
}).then((instagram)=>{
	console.log(instagram)// Saco el valor de instagram creo
}).catch((e)=>{
	console.log(e)
})//maneja todos los errores