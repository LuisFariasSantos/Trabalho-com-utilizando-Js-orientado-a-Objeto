function troca(x) {
	limpar();
	document.getElementById('err').className = "invisivel";
	document.getElementById('cor').className = "invisivel";
	document.getElementById('exi').className = "invisivel";
	document.getElementById('l1').className="invisivel";
	document.getElementById('l2').className="invisivel";
	if (x == "v1") {
		document.getElementById('dcadastro').className = "invisivel";
		document.getElementById('dmenu').className = "visivel";
	}
	if (x == "v2") {
		document.getElementById('dlogin').className = "invisivel";
		document.getElementById('dmenu').className = "visivel";
	}
	if (x == "p1") {
		document.getElementById('dmenu').className = "invisivel";
		document.getElementById('dcadastro').className = "visivel";
	}
	if (x == "p2") {
		document.getElementById('dmenu').className = "invisivel";
		document.getElementById('dlogin').className = "visivel";
	}
	if (x == 'n1') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dcri').className = "visivel";
	}
	if (x == 'n2') {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dido').className = "visivel";
	}
	if (x == "n3") {
		document.getElementById('emp').className = "invisivel";
		document.getElementById('dma').className = "visivel";
	}
	if (x == 'vo1') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dcri').className = "invisivel";
	}
	if (x == 'vo2') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dido').className = "invisivel";
	}
	if (x == 'vo3') {
		document.getElementById('emp').className = "visivel";
		document.getElementById('dma').className = "invisivel";
	}

}
function troca1() {
	document.getElementById('mostrar').className = "invisivel";
	document.getElementById('emp').className = "visivel";
}