function agregarFruta() {
			var nombreFruta = document.getElementById("nuevaFruta").value; //obtiene el valor del imput
			var item = document.createElement("li"); // crea el elemento para agregar a lista
			var textItem = document.createTextNode(nombreFruta); //crea el nodo texto
			item.appendChild(textItem); // adiciona el texto
			document.getElementById("frutas").appendChild(item);
			document.getElementById("nuevaFruta").value="";
		}