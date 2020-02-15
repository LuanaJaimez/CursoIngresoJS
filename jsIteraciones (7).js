function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while(respuesta != null) {

		console.log(respuesta + " | " + acumulador + " | " + contador);

		respuesta = prompt("Ingrese un numero:");

		console.log(respuesta + " | " + acumulador + " | " + contador);
		
		if(respuesta != null) {
			acumulador += parseInt(respuesta);
			contador++;
		}
		console.log(respuesta + " | " + acumulador + " | " + contador);
		
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN