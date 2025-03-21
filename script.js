// Function for the landing page button
function showMessage() {
    const button = document.getElementById("clickBtn");
    const message = document.getElementById("message");

    // First click: Change button text and show message
    if (button.textContent === "Click me") {
        button.textContent = "Click me again";
        message.style.display = "block";

        // Redirect to menu.html after 2 seconds
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2000);
    }
    // Second click: Redirect immediately
    else if (button.textContent === "Click me again") {
        window.location.href = "menu.html";
    }
}