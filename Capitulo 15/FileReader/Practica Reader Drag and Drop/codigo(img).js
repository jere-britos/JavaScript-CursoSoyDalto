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
	cargarArchivo(e.dataTransfer.files[0])
})

const changeStyle = (obj,color)=>{
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar =>{
	const reader = new FileReader();//Abre el reader
	reader.readAsDataURL(ar);//nos lo lee como url
	reader.addEventListener("load",e=>{//cuando carga "LOAD"
		let url = URL.createObjectURL(ar);//creamos una url para el archivo
		let img = document.createElement("IMG");//creamos una imagen
		img.setAttribute("src",url);//se agregamos al atributo src el url.
		document.querySelector(".resultado").appendChild(img);//Pegamos la imagen adentro de la caja resultado
	})
}
