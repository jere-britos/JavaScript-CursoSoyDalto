"use strict";
//Crear una solicitud al navegador que nos abra una bd
const IDBRequest = indexedDB.open("databasej",1);//viene del objeto windows
//Mediante el metodo open nos abren la BD
//En caso de que no exista la crea, si no, la abre
//Segundo parametro la version
// console.log(IDBRequest)//nos devuelve una solicitud para abrir una base de datos

//Los siguientes metodos nos dicen el resto de acciones de la base de datos
//va a hacer cuando se crea, cuando se llama y tiene error, y cuando se llama
//y tiene exito
IDBRequest.addEventListener("upgradeneeded",()=>{
	// console.log("se creó correctamente");//nos avisa que no habia base de datos y creó una nueva
	const db = IDBRequest.result;//Resultado de la solicitud de la bd
	db.createObjectStore("nombres",{//Se agrega 2 parametros y uno es el key
		autoIncrement: true//key se autoincrementa
	})
})

IDBRequest.addEventListener("success",()=>{
	leerObjetos()//pudimos abrir la base de datos
})

IDBRequest.addEventListener("error",()=>{
	console.log("ocurrió un error al abrir la base de datos");
})

document.getElementById('add').addEventListener("click",()=>{
	let nombre = document.getElementById("nombre").value;
	if (nombre.length > 0) {
		if (document.querySelector(".posible") != undefined) {
			if (confirm("Hay elementos sin guardar: ¿Quieres continuar?")) {
				addObjeto({nombre});
				leerObjetos()
			}
		} else {
				addObjeto({nombre});
				leerObjetos()
		}
	}		
})


//Crear Objetos con el metodo transaction
const addObjeto = objeto =>{
	let nombre = document.getElementById("nombre");
	const IDBData = getIDBData("readwrite","objeto agregado correctamente");
	IDBData.add(objeto);
	nombre.value = " ";
}

//Leer Objetos con el metodo transaction
const leerObjetos =()=>{
	const IDBData = getIDBData("readonly");
	const cursor = IDBData.openCursor();//con el cursor nos lee los datos
	const fragment = document.createDocumentFragment();
	document.querySelector(".nombres").innerHTML = "";
	cursor.addEventListener("success",()=>{//en caso de que todo haya salido correctamente
		if (cursor.result) {//verifica que exista
			let elemento = nombresHTML(cursor.result.key,cursor.result.value);
			fragment.appendChild(elemento);
			// console.log(cursor.result.value);//lee el cursor mediante "value"
			cursor.result.continue();//continua leyendo el cursor
		} else document.querySelector(".nombres").appendChild(fragment);
	})
}

//Modificar objetos
const modificarObjeto = (key,objeto) =>{
	const IDBData = getIDBData("readwrite","objeto modificado correctamente");
	IDBData.put(objeto,key);//Si existe lo modifica, sino, lo agrega
}

//Eliminar objetos
const eliminarObjeto = key =>{
	const IDBData = getIDBData("readwrite","objeto eliminado correctamente");
	IDBData.delete(key);//Si existe lo modifica, sino, lo agrega
}

//Cada vez que querramos operar una bd debemos abrir una transaticion
const getIDBData = (mode,msg)=>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres",mode);//En donde queres ejecutar esta transaccion y el modo lectura/escritura o solo lectura
	const objectStore = IDBtransaction.objectStore("nombres");//una vez dejala la transaction abierta	
	IDBtransaction.addEventListener("complete",()=>{
		console.log(msg)
	})
	return objectStore;
}

const nombresHTML = (id,name)=>{
	const container = document.createElement("DIV");
	const h2 = document.createElement("H2");
	const options = document.createElement("DIV");
	const saveButton = document.createElement("button");
	const deleteButton = document.createElement("button");

	container.classList.add("nombre");
	options.classList.add("options");
	saveButton.classList.add("imposible");
	deleteButton.classList.add("delete");

	saveButton.textContent = "Guardar";
	deleteButton.textContent = "Eliminar";	
	h2.textContent = name.nombre;
	h2.setAttribute("contenteditable","true");
	h2.setAttribute("spellcheck","false");

	options.appendChild(saveButton);
	options.appendChild(deleteButton);

	container.appendChild(h2);
	container.appendChild(options);

	h2.addEventListener("keyup",()=>{
		saveButton.classList.replace("imposible","posible");
	})

	saveButton.addEventListener("click",()=>{
		if (saveButton.className == "posible") {
			modificarObjeto(id,{nombre: h2.textContent});
			saveButton.classList.replace("posible","imposible");
		}
	})

	deleteButton.addEventListener("click",()=>{
		eliminarObjeto(id);
		document.querySelector(".nombres").removeChild(container);
	})

	return container
}