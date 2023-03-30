//Ejercicio

const newFechaUTC = dias =>{
	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias*1000*60*60*24);//devuelve una fecha en milisegundos
	return fecha.toUTCString();//devuelve la fecha en formato UTC
}

const crearCookies = (name,dias)=>{
	expires = newFechaUTC(dias);
	document.cookie = `${name};expires=${expires}`;
}

//Buscar cookies por nombres
const obtenerCookie = cookieName =>{
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for (let i = 0; cookies.length > i; i++) {
		cookie = cookies[i].trim();
		if (cookie.starsWith(cookieName)) {
			return cookie.split("=")[1];
		}
	}
	return "no hay cookies con ese nombre";
}

if (obtenerCookie("acceptedCookies") !== "si") {
	setTimeout(()=>{
		document.querySelector(".bg-modal").style.zIndex = "10";
		document.querySelector(".bg-modal").style.opacity = "1";
		document.getElementById("accept").addEventListener("click",()=>{
			crearCookies("acceptedCookies=si",30);
			document.querySelector(".bg-modal").style.opacity = "0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex = "-1";
			},1000)
		})
		document.getElementById("deny").addEventListener("click",()=>{
			crearCookies("acceptedCookies=no",30);
			document.querySelector(".bg-modal").style.opacity = "0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex = "-1";
			},1000)
		})
	},200)
}