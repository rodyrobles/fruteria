//Esta si funciona
var frutas = []; //El arrego debe estar fuera de la funcion
function agregarFruta() {
	var fruta, fLen, text, i; 
	fruta= document.getElementById("fruta").value;
	frutas.push(fruta);
	fLen = frutas.length;
	text = "";
	for (i = 0; i < fLen; i++) {
	text += "<li>" + frutas[i] + "</li>";
	document.getElementById("lista").innerHTML = text;
	}
}



