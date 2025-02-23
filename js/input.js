// Ensure the script runs only after the entire page (DOM) is fully loaded
document.addEventListener('DOMContentLoaded', function () {  

    // Select the login button and add a click event listener
    document.getElementById('btn-login').addEventListener('click', function (event) {  
        
        console.log('The login button was clicked');  // Log when the button is clicked
        
        event.preventDefault();  // Prevent the form from submitting and refreshing the page
        
        // Select the phone number input field
        const phoneNumber = document.getElementById('phone-number');  

        // Log the value entered in the phone number field
        console.log('Phone number entered:', phoneNumber.value);  

    });

});
