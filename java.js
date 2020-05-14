

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
	playMusic()
}
function enlargeImg5() {
	modal.style.display = "block";
	modalImg.src = "images/tree.jpg";
	playMusic()
}
function enlargeImg6() {
	modal.style.display = "block";
	modalImg.src = "images/water.jpeg";
	playMusic()
}
function enlargeImg7() {
	modal.style.display = "block";
	modalImg.src = "images/melrose.jpg";
	playMusic()
}
function enlargeImg8() {
	modal.style.display = "block";
	modalImg.src = "images/sun.jpg";
	playMusic()
}
function enlargeImg9() {
	modal.style.display = "block";
	modalImg.src = "images/think.jpg";
	playMusic()
}
function enlargeImg10() {
	modal.style.display = "block";
	modalImg.src = "images/yearbook.jpg";
	playMusic()
}
function enlargeImg11() {
	modal.style.display = "block";
	modalImg.src = "images/glass.jpg";
	playMusic()
}
function enlargeImg12() {
	modal.style.display = "block";
	modalImg.src = "images/beca.jpg";
	playMusic()
}
function enlargeImg13() {
	modal.style.display = "block";
	modalImg.src = "images/palm.jpg";
	music.pause();
}
function enlargeImg14() {
	modal.style.display = "block";
	modalImg.src = "images/dark.JPG";
	playMusic()
}
function enlargeImg15() {
	modal.style.display = "block";
	modalImg.src = "images/boba.jpg";
	playMusic()
}
function enlargeImg16() {
	modal.style.display = "block";
	modalImg.src = "images/beca2.jpg";
	playMusic()
}
function enlargeImg17() {
	modal.style.display = "block";
	modalImg.src = "images/devin.jpg";
	playMusic()
}
function enlargeImg18() {
	modal.style.display = "block";
	modalImg.src = "images/down.jpg";
	playMusic()
}

function closeModal() {
	modal.style.display = "none";
	playMusic()
}



