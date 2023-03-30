// const getName = ()=>{ //Sin async no se ejecuta, ya que funciona de manera asincrona
// 	.fetch("informacion.txt")
// 		.then(res=>{
// 			if (res.ok) Promise.resolve(res)//Mientras esto sea falso, significa que algo no se ejecuto correctamente
// 			else Promise.reject(res)
// 		})
// 		.then(res=> console.log(res))
// 		.catch(e=>console.log(e))
// }

const getName = async ()=>{

	let peticion = await fetch("informacion.txt");//Fetch  nos devuelve una promesa
	let resultado = await peticion.json();//Como peticion es una promesa encapsulada, se accede a los metodos que tiene fetch	document.querySelector(".nombre").innerHTML = nombre;
	
	// let resultado = await axios("infomacion.txt");
	let div = document.createElement("DIV");
	div.classList.add("nombre");
	div.innerHTML = resultado.nombre;
	// div.innerHTML = resultado.data.nombre;
	document.body.appendChild(div)

}

const getAge = async ()=>{

	let peticion = await fetch("informacion.txt");//Fetch  nos devuelve una promesa
	let resultado = await peticion.json();//Como peticion es una promesa encapsulada, se accede a los metodos que tiene fetch	document.querySelector(".nombre").innerHTML = nombre;
	
	// let resultado = await axios("infomacion.txt");
	let div = document.createElement("DIV");
	div.classList.add("edad");
	div.innerHTML = resultado.edad;
	// div.innerHTML = resultado.data.edad;
	document.body.appendChild(div)

}

document.getElementById('getName').addEventListener("click",getName);
document.getElementById('getAge').addEventListener("click",getAge);



















