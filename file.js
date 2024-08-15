document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if name is empty or contains non-letter characters
    if (!isValidName(name)) {
        alert('Please enter a valid name.');
        event.preventDefault();
    }
    
    // Check if email is empty or invalid format
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    // Check if message is empty or exceeds 1000 characters
    if (!isValidMessage(message)) {
        alert('Message should not exceed 1000 characters.');
        event.preventDefault();
    }
});

function isValidName(name) {
    // Regular expression to match only letters
    var nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMessage(message) {
    // Check if message length exceeds 1000 characters
    return message.length <= 1000;
}