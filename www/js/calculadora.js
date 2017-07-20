var num1 = 0;
var num2 = 0;
var resultado = 0;
var flagSuma = 0;
var flagResta = 0;
var flagMulti = 0;
var flagDiv = 0;

function division(){
		var calculoAux = $("#calculo").text();
	if(calculoAux.indexOf("+") != -1 || calculoAux.indexOf("-") != -1 || calculoAux.indexOf("*") != -1){
		igual();
		flagDiv = 1;
		$("#calculo").append("/");
	}else{
		
		if(flagDiv == 0){
			flagDiv = 1;
			num1 = $("#calculo").text();
			$("#calculo").append("/");
		}else{
			igual();
			flagDiv = 1;
			$("#calculo").append("/");
		}
	}
}

$("#division").click(function() {
	division();
});

function multiplicacion(){
		var calculoAux = $("#calculo").text();
	if(calculoAux.indexOf("+") != -1 || calculoAux.indexOf("-") != -1 || calculoAux.indexOf("/") != -1){
		igual();
		flagMulti = 1;
		$("#calculo").append("*");
	}else{
		
		if(flagMulti == 0){
			flagMulti = 1;
			num1 = $("#calculo").text();
			$("#calculo").append("*");
		}else{
			igual();
			flagMulti = 1;
			$("#calculo").append("*");
		}
	}
}
$("#multiplicacion").click(function() {
	multiplicacion();
});

function suma(){
	var calculoAux = $("#calculo").text();
	if(calculoAux.indexOf("-") != -1 || calculoAux.indexOf("*") != -1 || calculoAux.indexOf("/") != -1){
		igual();
		flagSuma = 1;
		$("#calculo").append("+");
	}else{
		
		if(flagSuma == 0){
			flagSuma = 1;
			num1 = $("#calculo").text();
			$("#calculo").append("+");
		}else{
			igual();
			flagSuma = 1;
			$("#calculo").append("+");
		}
	}
}
$("#suma").click(function() {
	suma();
});

function resta(){
	var calculoAux = $("#calculo").text();
	if(calculoAux.indexOf("+") != -1 || calculoAux.indexOf("*") != -1 || calculoAux.indexOf("/") != -1){
		igual();
		flagResta = 1;
		$("#calculo").append("-");
	}else{
	
		if(flagResta == 0){
			flagResta = 1;
			num1 = $("#calculo").text();
			$("#calculo").append("-");
		}else{
			igual();
			flagResta = 1;
			$("#calculo").append("-");
		}
		
	}	
}	
$("#resta").click(function() {
	resta();
});

function igual(){
	var calculoAux = $("#calculo").text();
	
	//Suma
	if(calculoAux.indexOf("+") != -1){
		flagSuma = 0;
		num2 = calculoAux.substr(calculoAux.indexOf("+") + 1, calculoAux.length);
		resultado = parseFloat(num1) + parseFloat(num2);
		resultado = truncarDecimales(resultado);
		
		num1 = resultado;
		$("#calculo").html(resultado);
		$("#resultado").html(resultado);
	}
	//Resta
	if(calculoAux.indexOf("-") != -1){
		flagResta = 0;
		num2 = calculoAux.substr(calculoAux.indexOf("-") + 1, calculoAux.length);
		resultado = parseFloat(num1) - parseFloat(num2);
		resultado = truncarDecimales(resultado);
		
		num1 = resultado;
		$("#calculo").html(resultado);
		$("#resultado").html(resultado);
	}
	//Multiplicacion
	if(calculoAux.indexOf("*") != -1){
		flagMulti = 0;
		num2 = calculoAux.substr(calculoAux.indexOf("*") + 1, calculoAux.length);
		resultado = parseFloat(num1) * parseFloat(num2);
		resultado = truncarDecimales(resultado);
		
		num1 = resultado;
		$("#calculo").html(resultado);
		$("#resultado").html(resultado);
	}
	//Division
	if(calculoAux.indexOf("/") != -1){
		flagDiv = 0;
		num2 = calculoAux.substr(calculoAux.indexOf("/") + 1, calculoAux.length);
		resultado = parseFloat(num1) / parseFloat(num2);
		resultado = truncarDecimales(resultado);
		
		num1 = resultado;
		$("#calculo").html(resultado);
		$("#resultado").html(resultado);
	}
	
}
$("#igual").click(function() {
	igual();
});

$("#borrarSimple").click(function() {
	var calculoAux = $("#calculo").text();
	$("#calculo").html( calculoAux.substr(0, calculoAux.length - 1) );
});

$("#borrarTodo").click(function() {
	$("#calculo").html("");
	$("#resultado").html("");
});

$("#coma").click(function() {
	$("#calculo").append(".");
});

$("#cero").click(function() {
	$("#calculo").append("0");
});

$("#uno").click(function() {
	$("#calculo").append("1");
});

$("#dos").click(function() {
	$("#calculo").append("2");
});

$("#tres").click(function() {
	$("#calculo").append("3");
});

$("#cuatro").click(function() {
	$("#calculo").append("4");
});

$("#cinco").click(function() {
	$("#calculo").append("5");
});

$("#seis").click(function() {
	$("#calculo").append("6");
});

$("#siete").click(function() {
	$("#calculo").append("7");
});

$("#ocho").click(function() {
	$("#calculo").append("8");
});

$("#nueve").click(function() {
	$("#calculo").append("9");
});


function truncarDecimales(num){
	if(num.toString().indexOf(".") != -1){
		var decimales = num.toString().substr(num.toString().indexOf(".") + 1, num.toString().length);
		
		if(decimales.length > 3){
			num = num.toFixed(3);
		}
	}
	return num;
	
}	