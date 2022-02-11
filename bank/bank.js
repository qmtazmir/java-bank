document.getElementById('submit-button').addEventListener('click', function(){ 
 const emailField = document.getElementById('user-email');
 const userEmail = emailField.value;

 const passwordField = document.getElementById('user-password');
 const userPassword = passwordField.value;
 console.log(userPassword);

if (userEmail == 'itazmir@gmail.com' &&  userPassword == 'tazmir'){
    window.location.href = 'new-bank.html';
}
});

document.getElementById('deposit-button').addEventListener
('click', function(){
    console.log('deposit button clicked')

})