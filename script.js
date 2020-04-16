const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email-address');
const password = document.getElementById('password')
const form = document.getElementsByTagName('form');

function checkForBlank() {
    event.preventDefault();
    if (fname.value === '') {
        fname.className = 'redBorder';
        document.getElementById('error1').removeAttribute('hidden');
    }
    if (lname.value === '') {
        lname.className = 'redBorder';
        document.getElementById('error2').removeAttribute('hidden');
    }
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if(pattern.test(document.getElementById('email-address').value)){
        return true;
    }else{
        email.className = 'redBorder';
        document.getElementById('error3').removeAttribute('hidden');
    };
    if (password.value === '') {
        password.className = 'redBorder';
        document.getElementById('error4').removeAttribute('hidden');
    }
}