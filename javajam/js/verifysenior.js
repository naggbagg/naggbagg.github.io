document.addEventListener('DOMContentLoaded', function() {
    // Prompt user for age and verify senior status
    var age = prompt("Please enter your age:", "");
    
    // Get the element where we'll display the message
    var verifyElement = document.getElementById('verify');
    
    // Validate age input
    if (age === null || age === "") {
        verifyElement.innerHTML = "Enjoy Music and Make Memories!";
        verifyElement.style.color = "#2E0000";
    } else {
        // Convert age to number and check if it's valid
        age = parseInt(age);
        if (isNaN(age) || age < 0) {
            verifyElement.innerHTML = "Enjoy Music and Make Memories!";
            verifyElement.style.color = "#2E0000";
        } else if (age >= 65) {
            verifyElement.innerHTML = "Free Friday Coffee Night for Senior!";
            verifyElement.style.color = "#8C3826";
            verifyElement.style.fontWeight = "bold";
        } else {
            verifyElement.innerHTML = "Enjoy Music and Make Memories!";
            verifyElement.style.color = "#2E0000";
        }
    }
}); 