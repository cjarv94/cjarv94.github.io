let video = document.getElementById("camera-output");

if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({ video: true })
	.then(function (stream) {
		video.srcObject = stream;
	})
	.catch(function (error) {
		console.log(error);
	});
}
