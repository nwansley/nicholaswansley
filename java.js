

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var modal = document.getElementById("myModal");
var music = document.getElementById("partedways-sounds");
var isPlaying = false;

function playMusic() {
	if (isPlaying == false) {
		music.play();
		music.currentTime = 0;
		isPlaying = true;
	}
	else if (isPlaying == true) {
		music.pause();
		isPlaying = false;
	}
}

function enlargeImg1() {
	modal.style.display = "block";
	modalImg.src = "images/sunset.jpeg";
	playMusic()
}
function enlargeImg2() {
	modal.style.display = "block";
	modalImg.src = "images/santa.jpg";
	playMusic()
}
function enlargeImg3() {
	modal.style.display = "block";
	modalImg.src = "images/camera.jpg";
	playMusic()
}
function enlargeImg4() {
	modal.style.display = "block";
	modalImg.src = "images/jacket.jpg";
	music.pause();
}
function enlargeImg5() {
	modal.style.display = "block";
	modalImg.src = "images/tree.jpg";
	music.pause();
}
function enlargeImg6() {
	modal.style.display = "block";
	modalImg.src = "images/water.jpeg";
	music.pause();
}
function enlargeImg7() {
	modal.style.display = "block";
	modalImg.src = "images/melrose.jpg";
	music.pause();
}
function enlargeImg8() {
	modal.style.display = "block";
	modalImg.src = "images/sun.jpg";
	music.pause();
}
function enlargeImg9() {
	modal.style.display = "block";
	modalImg.src = "images/think.jpg";
	music.pause();
}
function enlargeImg10() {
	modal.style.display = "block";
	modalImg.src = "images/yearbook.jpg";
	music.pause();
}
function enlargeImg11() {
	modal.style.display = "block";
	modalImg.src = "images/glass.jpg";
	music.pause();
}
function enlargeImg12() {
	modal.style.display = "block";
	modalImg.src = "images/beca.jpg";
	music.pause();
}
function enlargeImg13() {
	modal.style.display = "block";
	modalImg.src = "images/palm.jpg";
	music.pause();
}
function enlargeImg14() {
	modal.style.display = "block";
	modalImg.src = "images/dark.JPG";
	music.pause();
}
function enlargeImg15() {
	modal.style.display = "block";
	modalImg.src = "images/boba.jpg";
	music.pause();
}
function enlargeImg16() {
	modal.style.display = "block";
	modalImg.src = "images/beca2.jpg";
	music.pause();
}
function enlargeImg17() {
	modal.style.display = "block";
	modalImg.src = "images/devin.jpg";
	music.pause();
}
function enlargeImg18() {
	modal.style.display = "block";
	modalImg.src = "images/down.jpg";
	music.pause();
}

function closeModal() {
	modal.style.display = "none";
	music.play();
}



