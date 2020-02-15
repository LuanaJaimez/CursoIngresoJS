function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	
	while(respuesta != null) {

		console.log(respuesta + " | " + acumulador + " | " + contador);

		respuesta = prompt("Ingrese un numero:");

		console.log(respuesta + " | " + acumulador + " | " + contador);
		
		if(respuesta == positivo) {
			acumulador += parseInt(respuesta);
			contador++;
		}
		else if(respuesta == negativo) {
			acumulador += parseInt(respuesta);
			contador++
		}
		console.log(respuesta + " | " + acumulador + " | " + contador);
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo * contador;

}//FIN DE LA FUNCIÓN