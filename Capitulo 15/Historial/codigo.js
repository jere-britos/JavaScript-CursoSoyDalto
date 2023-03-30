//Lo que hace esto es crear una nueva entrada en el historial
console.log(window.location.href);
history.pushState({nombre: "pedro"},"","?jajaxd");
//Lo que agrega es el estado
console.log(window.location.href);

//Para ver el estado una vez ingresado en la pagina
addEventListener("popstate",(e)=>{
	console.log(e.state)
})

//Usando el método replaceState
history.replaceState({nombre: "pedro"},"","?jajaxd");
//cambia la entrada del historial pero no la conserva.