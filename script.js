document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match
    if (username === "admin" && password === "password") {
        // Redirect to dashboard or perform any desired action
        alert("Login successful!");
    } else {
        // Display error message
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});