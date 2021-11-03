let nombre = prompt ("Ingresa tu nombre por favor");
alert ("Bienvenid@ " + nombre + "! tendras la opcion de elegir entre dos juegos");
let decision = parseInt(prompt("ingresa 1 para acceder al primero juego o 2 para ingresar al segundo"));
let pel1 = "V for Vendetta";
let pel2 = "Da Vinci's code";
let pel3 = "Hangover";
let pel4 = "Public enemies";
let pel5 = "Fargo";

if(decision == 1){
	alert("Te dire en que año naciste (mas o menos)");
	let edad = prompt( nombre + " , ingresa tu edad:");
	let resul = (2021 - edad + " Aprox.");
	document.write(nombre + " naciste en el " + resul);
} else if(decision == 2){
	alert(nombre + " te recomendare una pelicula!!!");
	let peli = prompt("Ingrese un numero entre el 1 y el 5");
	if(peli == 1){
		console.log(nombre + " te recomiendo ver " + pel1);
		document.write(nombre + " te recomiendo ver " + pel1);
	}else if(peli == 2){
		console.log(nombre + " te recomiendo ver " + pel2);
		document.write(nombre + " te recomiendo ver " + pel2);
	}else if(peli == 3){
		console.log(nombre + " te recomiendo ver " + pel3);
		document.write(nombre + " te recomiendo ver " + pel3);
	}else if(peli == 4){
		console.log(nombre + " te recomiendo ver " + pel4);
		document.write(nombre + " te recomiendo ver " + pel4);
	}else if(peli == 5){
		console.log(nombre + " te recomiendo ver " + pel5);
		document.write(nombre + " te recomiendo ver " + pel5);
	}else{
		alert("Ingrese un numero dentro del rango");
	}
}else{
	alert("debe elegir una de las dos opciones");
}
