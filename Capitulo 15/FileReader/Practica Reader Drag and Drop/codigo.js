const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
	e.preventDefault();
	changeStyle(e.srcElement ,"#444");
})

zona.addEventListener("dragleave",e=>{
	e.preventDefault();
	changeStyle(e.srcElement ,"#888");
})

zona.addEventListener("drop",e=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#888");
	cargarArchivo(e.dataTransfer.files[0]);
	zona.style.border= "4px solid #888"
})

const changeStyle = (obj,color)=>{
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar =>{
	const reader = new FileReader();//Abre el reader
	reader.readAsArrayBuffer(ar);//nos lo lee como url
	
	reader.addEventListener("progress",e=>{
		let carga = Math.round(e.loaded / ar.size * 100);
		zona.textContent = `${carga}%`;
		document.querySelector(".barra-de-carga").style.padding = "75px 20px";
		document.querySelector(".barra-de-carga").style.width = `${carga/3.6}%`;
		// console.log(ar.size);//tamaño del archivo
		// console.log(e.loaded)//funcion del progress que nos dice cuanto cargo el total del peso
	});
	
	reader.addEventListener("loadend",e=>{
		changeStyle(zona,"#4f9");
		zona.style.borderStyle = "solid";
		document.querySelector(".barra-de-carga").style.background = "#4f9";
		setTimeout(()=>{
			zona.style.color = "#fff";
			zona.style.animation = "aparecer 1s forwards";
			zona.textContent = "!Carga completa!";
		}, 500)
	});
	
	reader.addEventListener("load",e=>{//cuando carga "LOAD"
		let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'});//Para crear un objeto de clase blob, nesecitamos dos objetos (array,options)
		let url = URL.createObjectURL(video);//Ahora video contiene un blob valida para crear una url
		let img = document.createElement("VIDEO");//creamos un video
		img.setAttribute("src",url);//se agregamos al atributo src el url.
		document.querySelector(".resultado").appendChild(img);//Pegamos el video adentro de la caja resultado
		img.play()
	})};
