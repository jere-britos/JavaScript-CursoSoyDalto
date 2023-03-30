// const objeto = {
// 	propiedad1 : "valor1",
// 	propiedad2 : "valor2",
// 	propiedad3 : "valor3"
// };

// METODO NORMAL
// const obtenerInformacion = ()=>{
// 	setTimeout(()=>{
// 		return objeto
// 	},1000);
// }
// console.log(obtenerInformacion());


// METODO ASYNCRONO
// const obtenerInformacion = ()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve(objeto);
// 		},3000)
// 	})
// }
// obtenerInformacion().then(resultado => console.log(resultado));

// ** Llamamos la función pero como tiene timeout va a ser undefined.
// ** Mientras que la "PROMESA" trabaja de forma asincrona, en tiempo real.

// Pero para eso nesecitamos hay una forma distinta de trabajar con asincronia, eso se hace con "await async"

// Mostrar información mediante async await

// const mostrarResultado = async ()=>{
// 	resultado = await obtenerInformacion();
// 	console.log(resultado);
// }
// mostrarResultado();

// ** Las funciones asincronas trabaja con promesas

// const obtenerInformacion = (text)=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve(text);
// 		},Math.random()*200);
// 	})
// }

// obtenerInformacion("1: tomasito").then(resultado => console.log(resultado));
// obtenerInformacion("2: bernardo").then(resultado => console.log(resultado));
// obtenerInformacion("3: eduardo").then(resultado => console.log(resultado));

// ** Al no usar await, los datos recibidos del servidor van a ser recibidos de manera desordenada


// **Lo que hace await basicamente accede al valor que retorna la promesa y nos dice que hasta que algo
// no se ejecute el codigo no va a seguir por nada en el mundo.

// const mostrarData = async()=>{
// 	data1 = await obtenerInformacion("1: tomasito");
// 	data2 = await obtenerInformacion("2: bernardo");
// 	data3 = await obtenerInformacion("3: eduardo");
// 	console.log(data1);
// 	console.log(data2);
// 	console.log(data3);
// }

// EJERCICIO DE COFLA