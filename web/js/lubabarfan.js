window.onload = start;

var mode;
var modalImg;
var captionText;


function start() {
	// Get the modal
	modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	modalImg = document.getElementById("img01");
	captionText = document.getElementById("caption");



	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}
}

function onImageClick(img) {
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}