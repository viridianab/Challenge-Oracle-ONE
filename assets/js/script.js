
function encript() {
	// Dar click en encriptar
	var clickBtnEncrypt = document.getElementById("btnEncrypt");
    
	clickBtnEncrypt.addEventListener("click", function (event) {
		//  Pasar texto a minus
		let input = document.getElementById("initialText").value.toString().toLowerCase();
        if (!/^([a-z]+\s)*[a-z]+\s?$/.test(input)) {
            alert("Intenta de nuevo");
        } else {
			// Ocultar placeholder y mostrar resultado
			document.getElementById("placeholder").style.display = "none";
			document.getElementById("results--show").style.display = "block";
			// Cambio de letras
			let newWord = input.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
			console.log(newWord);
			// Nueva palabra
			document.getElementById("result").innerHTML = newWord;
		}
	});
}

function decript() {
	// Dar click en decriptar
	var clickBtnDecrypt = document.getElementById("btnDecrypt");

	clickBtnDecrypt.addEventListener("click", function (event) {
		//  Pasar texto a minus
		let input = document.getElementById("initialText").value.toString().toLowerCase();
		if (!/^([a-z]+\s)*[a-z]+\s?$/.test(input)) {
			alert("Intenta de nuevo");
		} else {
			// Ocultar placeholder y mostrar resultado
			document.getElementById("placeholder").style.display = "none";
			document.getElementById("results--show").style.display = "block";

			// Cambio de letras
			let newWord = input.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
			console.log(newWord);
			// Nueva palabra
			document.getElementById("result").innerHTML = newWord;
		}
	});
}


function copy() {
	var copyText = document.getElementById("result");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	alert("Texto copiado: " + copyText.value);
}
