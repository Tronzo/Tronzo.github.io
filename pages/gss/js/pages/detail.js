var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 60,
	height : 60
});

function makeCode () {		
	var url = location.href;
	qrcode.makeCode(url);
}

makeCode();