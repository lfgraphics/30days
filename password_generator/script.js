const pasBox = document.getElementById('Password');

const validateLength = () => {
    const lengthInput = document.getElementById('length');
    const value = parseInt(lengthInput.value);
    if (value < 8 || value > 60) {
        alert(value > 60 ? "You are very chalak bro...\nHaan... Very chala." : 'Please enter a value between 8 and 60.');
        lengthInput.value = '';
        createPassword()
    }
};

const createPassword = () => {
    const length = parseInt(document.getElementById('length').value);
    const clength = document.getElementById('length');
    if (isNaN(length) || length === '' || length === null) {
        alert('Please enter your password length');
        clength.focus();
        clength.click();
    } else {
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        const symbol = '!@#$%^&*()_+~|{}[]<>/-=?:;"`';
        let password = '';

        // Calculate the number of symbols to include in the password
        const symbolsLength = Math.floor(length / 4);

        // Calculate the number of digits to include in the password
        const digitsLength = Math.floor(length / 4);

        // Calculate the number of letters to include in the password (remaining characters)
        const lettersLength = length - symbolsLength - digitsLength;

        // Add digits to the password
        for (let i = 0; i < digitsLength; i++) {
            password += number[Math.floor(Math.random() * number.length)];
        }

        // Add letters to the password
        const letters = upperCase + lowerCase;
        for (let i = 0; i < lettersLength; i++) {
            password += letters[Math.floor(Math.random() * letters.length)];
        }

        // Add symbols to the password
        for (let i = 0; i < symbolsLength; i++) {
            password += symbol[Math.floor(Math.random() * symbol.length)];
        }

        // Shuffle the password
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        document.getElementById('Password').value = password;
    }
};


const Copy = () => {
    if (pasBox.value === null || pasBox.value === '') {
        alert('Please Generate a password First');
        createPassword();
    } else {
        pasBox.select();
        document.execCommand('copy');
    }
};

document.getElementById('generate').addEventListener('click', createPassword);
document.getElementById('copy').addEventListener('click', Copy);
document.getElementById('length').addEventListener('blur', validateLength);

console.log("I've added more functionality like desired digits of password and shuffled characters instead of a template password and used onliner method 😉");