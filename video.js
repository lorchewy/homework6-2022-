var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

document.querySelector('#play').addEventListener('click', function(){
	console.log('play video');
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'; 
});

document.querySelector('#pause').addEventListener('click', function(){
	console.log('pause video');
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function() {
	console.log('slow down bruh!');
	video.playbackRate *= 0.95;
	console.log(video.playbackRate); 
});

document.querySelector('#faster').addEventListener('click', function() {
	console.log('speedup bruh!');
	video.playbackRate /= 0.95; 
	console.log(video.playbackRate); 
});

document.querySelector('#skip').addEventListener('click', function(){
	console.log('skipper');
	if (video.currentTime < (video.duration - 15)){
		console.log('original time' + video.currentTime);
		video.currentTime += 15; 
		console.log('new time'+ video.currentTime);
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log('new time'+ video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.muted = !video.muted;
	if (video.muted){
		document.getElementById("mute").textContent = "Unmute";
	}
	else {
		document.getElementById("mute").textContent = "Mute";
	}
});

// document.querySelector('#mute').addEventListener('click', function(){
// 	console.log('Video muted');
// 	if (video.muted === false) {
// 		console.log('shhhhhh');
// 		document.querySelector('#mute').innerHTML = 'unmute';
// 		video.muted = true;
// 	}
// 	else{
// 		console.log('video is unmuted');
// 		video.muted = false;
// 		document.querySelector('#mute').innerHTML = 'mute';
// 		console.log('yas');
// 	}
// });

function updateVolumeText(vol) {
	document.getElementById("volume").textContent = vol * 100 + "%";
}

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume changed");
	let slider = document.getElementById("slider");
	video.volume = slider.value / 100;
	updateVolumeText(video.volume);
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("no school");
	video.classList.remove("oldSchool");
});
