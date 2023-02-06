const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = (username) => {
    const ValidName  = /^[A-Za-z\s]+$/;
    return ValidName.test(username)
}

const resetForm = () => {
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(inputControl => {
    inputControl.classList.remove('error');
    inputControl.classList.remove('success');
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    });
    };



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Rellene este campo');
    } else if (!isValidName(usernameValue)) {
        setError ( username, 'Nombre invalido')  ;
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Rellene este campo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email invalido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Rellene este campo');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La Clave debe tener al menos 8 caracteres .')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Rellene este campo');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
        
    }
    if (usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && isValidName(usernameValue) && isValidEmail(emailValue) && passwordValue.length >= 8 && password2Value === passwordValue) {
        setTimeout(() => {
        alert('Inscripción correcta');
        resetForm();
        }, 700);



    };


};