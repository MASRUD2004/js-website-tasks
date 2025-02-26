document.addEventListener('DOMContentLoaded', function () {  

    document.getElementById('btn-login').addEventListener('click', function (event) {  
        
        console.log('The login button was clicked');  
        event.preventDefault();  

        const phoneNumber = document.getElementById('phone-number').value;  
        const pinNumber = document.getElementById('pin-number').value;

        console.log('Phone number entered:', phoneNumber);  
        console.log('Pin number:', pinNumber);

        if (phoneNumber === "01819" && pinNumber === "1234") {
            console.log('You are logged in.');
            window.location.href = 'home.html';  // Adjust the path based on your folder structure
        } else {
            alert('Invalid login credentials');
        }

    });

});
