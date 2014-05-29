/**
 * variables
 */
var redBool=true;
var dimenAntes=$("#posibilidades").children('div').first().width();
var botonJugada;

//array de colores
var colores=['rojo','azul','rosa','amarillo','verde','naranja','negro','morado','gris','blanco'];

//objeto juego
var juego={
	'arrColAleatorio':[],
	'arrColCandidato':[],
	'muertos':0,
	'heridos':0,
	'intento':0,
	'estado':''

}

/**************************************************************

Funciones

******************************************************************/


function coloresAleatorios(x){
	var arrAle= arrAl(x);
	var arrFinal=[];
	for(i=0;i<x;i++){
		var y=arrAle[i];
		var color=colores[y];
		arrFinal.push(color);
	}
	return arrFinal;
}
function arrAl(x){
	var y;
	var arr=[];
	var contador=0;
			function pushArr(x){
				switch(x){
				case 4:
					for(i=0;i<x;i++){
						var z=aleatorio(0,x+2);
						arr.push(z);
					}
				break;
				case 5:
					for(i=0;i<x;i++){
						var z=aleatorio(0,x+3);
						arr.push(z);
					}
				break;
				case 6:
					for(i=0;i<x;i++){
						var z=aleatorio(0,x+4);
						arr.push(z);
					}
				break;
				default:
				console.log("default switch arrAl()");
				}				
			}	
	pushArr(x);
		while(hayRepetidos(arr)){
			arr=[];
			pushArr(x);
		}		
return arr;	
}

function aleatorio(inferior,superior){
	var diferencia= superior-inferior;
	 return Math.floor((Math.random()* diferencia)+inferior);	
}

function hayRepetidos(arr){
	var contador=0;
	var retorno=false;
	for (i = 0 ; i < arr.length; i++) {
			for(j=0 ; j<arr.length; j++){
				if(arr[i]== arr[j]){
					contador++;
				}
			}
		};
	if(contador== arr.length){
		retorno=false;
	}else{retorno=true;}
	return retorno;
}
function deshabilitarRadios(){
	var radio=document.opciones.cantidad;
	for (var i = 0; i < radio.length; i++) {
		radio[i].disabled=true;
	};
}
function habilitarRadios(){
	var radio=document.opciones.cantidad;
	for (var i = 0; i < radio.length; i++) {
		radio[i].disabled=false;
	};
}

function cantidadNumeros(){	
		var array= document.forms[0].querySelectorAll("input[type=radio]");
		var bool=false;
		for (var i = 0; i < array.length; i++) {
			if (array[i].checked){
				bool=true;
				break;
			}
		};
		if(bool){
			return parseInt(array[i].value);
		}else{
			return "undefined";
		}		
	}


function poblarArrCandidato(){
	var arr=['amarillo', 'rojo', 'azul' , 'rosa'];
	juego.arrColCandidato=arr;
}

function compararArrays(){
	var arrCandi=juego.arrColCandidato;
	var arrAle=juego.arrColAleatorio;
	var muertos=0;
	var heridos=0;
	for(i=0 ; i<arrAle.length ; i++){
		for(j=0 ; j<arrCandi.length ; j++)
			if(arrAle[i]==arrCandi[j]){
				if(i==j){
					muertos++;
				}else{
					heridos++;
				}
			}
			
	}
	juego.muertos=muertos;
	juego.heridos=heridos;
}

function redimensionar(){
	var y= $(this).height();
	var x=dimenAntes*1.5;
	if(redBool){
		$('#posibilidades').children('div').css({'background-size' : dimenAntes +'px'+ ' ' + dimenAntes + 'px' ,'min-width': dimenAntes , 'min-height': dimenAntes} );
		$(this).css({'background-size' : x +'px'+ ' ' + x + 'px' ,'min-width': x , 'min-height': x} );

		redBool=false;
	}else{
		x=dimenAntes;
		$(this).css({'background-size' : x +'px'+ ' ' + x + 'px' ,'min-width': x , 'min-height': x} );
		redBool=true;
	}
	if(x>dimenAntes){
		redBool=true;
	}
	var z=$("#posibilidades").children('div');
}
function enviaJugada(){
	juego.estado="jugando";
	poblarArrCandidato();
	compararArrays();



	console.log('arr maquina: '+ juego.arrColAleatorio);
	console.log('arr candidato: ' + juego.arrColCandidato);
	console.log('muertos: ' + juego.muertos);
	console.log('heridos: ' + juego.heridos);
}

/***********************************************************


inicio

************************************************************/
function inicio(){
	botonJugada=$("#jugando");
	document.getElementById('start').disabled=false;
	//deshabilitarRadios();
	juego.arrColAleatorio=coloresAleatorios(cantidadNumeros());

	$("#posibilidades .cero").click(redimensionar);
	$("#posibilidades .uno").click(redimensionar);
	$("#posibilidades .dos").click(redimensionar);
	$("#posibilidades .tres").click(redimensionar);
	$("#posibilidades .cuatro").click(redimensionar);
	$("#posibilidades .cinco").click(redimensionar);
	$("#posibilidades .seis").click(redimensionar);
	$("#posibilidades .siete").click(redimensionar);
	$("#posibilidades .ocho").click(redimensionar);
	$("#posibilidades .nueve").click(redimensionar);
	botonJugada.click(enviaJugada);
}