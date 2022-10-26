// Select static & shared page elements
const overlayWrapper = document.getElementById("js-overlay");
const overlayContent = document.getElementById("js-overlay-target");

function toggleImageView(index) {
  const image = document.getElementById(`js-gallery-image-${index}`);

  // Store image parent element
  const imageParentElement = image.parentElement;

  // Move image node from grid to modal
  moveImageToModal(image);

  // Create click listener on the overlay for the active image element
  overlayWrapper.onclick = function () {
    // Return the image to its parent element
    moveImageToGrid(imageParentElement);
  };
}

// Helper functions for moving the image around and toggling the overlay

function moveImageToModal(image) {
  // Show the overlay
  overlayWrapper.classList.add("overlay--active");

  overlayContent.append(image);
}

function moveImageToGrid(imageParentElement) {
  imageParentElement.append(overlayContent.querySelector("img"));

  // Hide the overlay
  overlayWrapper.classList.remove("overlay--active");
}