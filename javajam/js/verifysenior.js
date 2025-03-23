// Ask if user is a senior citizen
const isSenior = confirm("Are you a senior citizen?");
const verifyElement = document.getElementById('verify');

if (isSenior) {
    verifyElement.textContent = "You are eligible for our senior discount!";
} else {
    verifyElement.textContent = "Check out our regular prices.";
} 