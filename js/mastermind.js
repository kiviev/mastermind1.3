function comenzarJuego(){
	var checkbox=comprobarCheckbox();
	var nombre= document.getElementById("nombre");
	var email= document.getElementById("email");
	var enviar = document.getElementById("enviarCandidato");
	var stop = document.getElementById("stop");
	var comenzar = document.getElementById("comenzar");
	stop.disabled=false;
	if(!checkbox){

		comenzarjuego();
	}else if( (nombre.value=="")||(nombre.value==undefined) || (nombre.value==null) ){
			alert("el campo nombre debe rellenarlo correctamente");
			nombre.focus();
			comenzarjuego();
		}
	else{numMax();
		desabilitarCheckbox();

		desabilitarBotonInicio();
		var terminar=true;
		var x= cantidadNumeros();
		var ms = new Mastermind(x);
		console.log(ms.numeroSecreto);
		ms.addDatos();
			ms.tiempo();
			iniciarCrono();
		
			while(terminar){
				var intento=document.getElementById("candidato").value;
				var comparar=ms.comparar(intento);
				
			}
			
			
		console.log(comparar + " comparar");

	}
	


var bool=false;

	


console.log(ms.datos.nombre);
}

