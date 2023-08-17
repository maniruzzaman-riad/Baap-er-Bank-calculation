document.getElementById('login-btn').addEventListener('click',function(){
    const passwordFild = document.getElementById('password-fild');
    const password =passwordFild.value;
    const emailfild = document.getElementById('email-fild');
    const email = emailfild.value;
    console.log(password.length);

    if(email.endsWith('@gmail.com') && password.length === 6){
        window.location.href = 'bank.html';
    }else{
        alert('Hi user, Please Use a valid email and correct password')
    }
    
    // window.open('bank.html');
})