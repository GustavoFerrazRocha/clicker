login_btn = document.getElementsByClassName('login_btn')[0]
signup_btn = document.getElementsByClassName('signup_btn')[0]

login_content = document.getElementsByClassName('login_content')[0]
signup_content = document.getElementsByClassName('signup_content')[0]

login = document.getElementsByClassName('login')[0]
signup = document.getElementsByClassName('signup')[1]

login1 = document.getElementsByClassName('login')[1]
signup1 = document.getElementsByClassName('signup')[0]

login_btn.addEventListener('click', () => {
    signup.style.backgroundColor = '#fff'
    login1.style.backgroundColor = 'rgb(255, 188, 62)'
    setTimeout(() => {
        signup_content.style.display = 'none'
        login_content.style.display = 'flex'
        signup.style.backgroundColor = 'rgb(255, 188, 62)'
        login1.style.backgroundColor = '#fff'
    }, 999);
})

signup_btn.addEventListener('click', () => {
    login.style.backgroundColor = 'rgb(255, 188, 62)'
    signup1.style.backgroundColor = '#fff'
    setTimeout(() => {
        login_content.style.display = 'none'
        signup_content.style.display = 'flex'
        login.style.backgroundColor = '#fff'
        signup1.style.backgroundColor = 'rgb(255, 188, 62)'
    }, 999);
})