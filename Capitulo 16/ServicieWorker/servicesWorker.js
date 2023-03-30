//Trabajar con la interface de service worker
navigator.serviceWorker()
//Verificar si el navegador soporta service worker
if (!navigator.serviceWorker) {
	console.log("no soporta")
}
//Registra un nuevo service worker
if (navigator.serviceWorker) {
	navigator.serviceWorker.register("sw.js")
}//creo un service worker llamado sw.js

navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola como estas"))
//va a verificar que el service worker ya haya cargado en la pagina
//ademas esto devuelve una promesa = "service worker registration"
//luego se accede a la propiedad active > postMessage y se envia el msg

navigator.serviceWorker.addEventListener("message",e=>{
	console.log("Mensaje recibido del service worker");
	console.log(e.data)//muestra el mensaje que envio "sw.js"
})





//HOJA DEL SERVICE WORKER "sw.js"

self.addEventListener("install",e=>{
	console.log("instalando service worker")
})//self es como el this., sirve para llamar al service
//worker y le pasa el metodo para ver si esta instalado-

self.addEventListener("activate",e=>{
	console.log("el service Worker esta activo")
})//verifica que esta activo

self.addEventListener("error",()=>{
	console.log("a surgido un error")
})//verifica que no haya ningun error

self.addEventListener("fetch",()=>{
	console.log("service worker interceptando petición")
})//verificar que se este enviando una solicitud a este service worker

self.addEventListener("message",e=>{
	console.log("mensaje recibido del navegador: ");
	console.log(e.data);
	e.source.postMessage("hola brother");
})//recibe el mensaje enviado a este service worker


//Service worker + caches
let version = "version 1";
self.addEventListener("install",e=>{
	console.log("instalando service worker")
	caches.open(version).then(cache=>{
		cache.add("index.html").then(res=>{
			console.log("Información cacheada");
		}).catch(e=>{
			console.log(e);
		})
	})
})

self.addEventListener("activate",e=>{
	caches.keys().then(key=>{
		return Promise.all(//recibe el valor de todas las promesas
			key.map(cache=>{//crea un nuevo array con los datos de key
				if (cache !== version) {
					console.log("cache antiguo eliminado");
					return caches.delete(cache);
				}
			}))
	})
})//verifica si una vez activado el service worker existe un cache que no
// sea "version" y luego los elimina, key() devuelve una promise de arrays

self.addEventListener("fetch", e=>{
	e.respondWith(async function()=>{
		const respuestaEnCache = await caches.match(e.request);
		if (respuestaEnCache) return respuestaEnCache;
		return e.request;
	});
})