
// Find the button and the hidden message

const button = document.getElementById("secretButton");
const message = document.getElementById("secretMessage");

// Listen for a click

button.addEventListener("click", function() {

    // Reveal the message

    message.hidden = false;

    // Change the button text

    button.textContent = "EDITION COMPLETE";

});
