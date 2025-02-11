const images = [
  "./assets/image1.gif",
  "./assets/image2.gif",
  "./assets/image3.gif",
  "./assets/image4.gif",
  "./assets/image5.gif",
];

const yesImages = [
  "./assets/yesImage1.gif",
  "./assets/yesImage2.gif",
  "./assets/yesImage3.gif",
];

const noButtonTexts = [
  "No",
  "Are you sure?",
  "Yaya pleeease",
  "Please don't....",
  "You're breaking my heart",
  "I'm gonna cry :(",
];

let currentImageIndex = 0;
let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");

document.getElementById("yes-button").addEventListener("click", function () {
  document.querySelector("header h1").style.display = "none";
  document.getElementsByClassName("buttons")[0].style.display = "none";
  document.getElementById("yayy text").style.display = "block";

  // Start looping through yesImages
  let yesImageIndex = 0;
  document.getElementById("imageDisplay").src = yesImages[yesImageIndex]; // Immediately set the first image
  yesImageIndex++;
  setInterval(() => {
    document.getElementById("imageDisplay").src = yesImages[yesImageIndex];
    yesImageIndex = (yesImageIndex + 1) % yesImages.length;
  }, 2000); // Change image every 2 seconds

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

function handleNoButtonClick() {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0; // Reset to the first image if the end is reached
  }
  document.getElementById("imageDisplay").src = images[currentImageIndex];

  // Increase the size of the Yes button
  let currentFontSize = window.getComputedStyle(yesButton).fontSize;
  let newFontSize = parseFloat(currentFontSize) + 12;
  yesButton.style.fontSize = newFontSize + "px";

  noButton.textContent =
    noButtonTexts[currentImageIndex % noButtonTexts.length];

  // Remove event listener if it's the last image
  if (currentImageIndex === images.length - 1) {
    noButton.removeEventListener("click", handleNoButtonClick);
  }
}

document
  .getElementById("no-button")
  .addEventListener("click", handleNoButtonClick);
