// Select the button and paragraph
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Add a click event listener
button.addEventListener("click", function() {

    // Log the click in the console
    console.log("Button clicked!");

    // Check the current message
    if (message.innerText === "Button was clicked!") {
        message.innerText = "";
    } else {
        message.innerText = "Button was clicked!";
    }

});