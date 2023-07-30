const passwordInput = document.getElementById('passwordInput');
const passwordStrength = document.getElementById('passwordStrength');
const strengthMessage = document.getElementById('strengthMessage');
const passwordGeneratorLink = document.getElementById('passwordGeneratorLink');

passwordInput.addEventListener('input', updatePasswordStrength);

function updatePasswordStrength() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    const strengthLevel = getStrengthLevel(strength);
    const strengthText = getStrengthText(strengthLevel);

    passwordStrength.style.width = `${strength}%`;
    passwordStrength.className = `strength-meter ${strengthLevel}`;
    strengthMessage.textContent = strengthText;

    // Toggle the visibility of the password generator link
    if (strength < 100) {
        passwordGeneratorLink.style.display = 'block';
    } else {
        passwordGeneratorLink.style.display = 'none';
    }
}


function calculatePasswordStrength(password) {
    let strength = 0;

    // Password length
    strength += Math.min(password.length * 4, 25);

    // Uppercase letters
    const uppercaseRegex = /[A-Z]/g;
    const uppercaseCount = (password.match(uppercaseRegex) || []).length;
    strength += Math.min((password.length - uppercaseCount) * 2, 16);

    // Lowercase letters
    const lowercaseRegex = /[a-z]/g;
    const lowercaseCount = (password.match(lowercaseRegex) || []).length;
    strength += Math.min((password.length - lowercaseCount) * 2, 16);

    // Numbers
    const numbersRegex = /\d/g;
    const numbersCount = (password.match(numbersRegex) || []).length;
    strength += Math.min(numbersCount * 4, 16);

    // Symbols
    const symbolsRegex = /[^a-zA-Z0-9]/g;
    const symbolsCount = (password.match(symbolsRegex) || []).length;
    strength += Math.min(symbolsCount * 6, 16);

    // Middle numbers or symbols
    const middleNumbersSymbolsRegex = /[\d!@#$%^&*?_~]/g;
    const middleNumbersSymbolsCount = (password.substring(1, password.length - 1).match(middleNumbersSymbolsRegex) || []).length;
    strength += Math.min(middleNumbersSymbolsCount * 2, 8);

    // Requirements (length, uppercase, lowercase, numbers, symbols)
    const requirements = (password.length >= 8) + (uppercaseCount > 0) + (lowercaseCount > 0) + (numbersCount > 0) + (symbolsCount > 0);
    strength += Math.min(requirements * 2, 8);

    // Deductions for consecutive characters
    const consecutiveRegex = /([a-zA-Z0-9])\1{1,}/g;
    const consecutiveCount = (password.match(consecutiveRegex) || []).reduce((total, consecutive) => total + consecutive.length, 0);
    strength -= consecutiveCount * 1;

    // Deductions for sequential characters
    const sequentialRegex = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210/g;
    if (password.match(sequentialRegex)) {
        strength -= password.length;
    }

    return Math.max(0, Math.min(Math.round(strength), 100));
}


function getStrengthLevel(strength) {
    if (strength >= 70) {
        return 'strength-strong';
    } else if (strength >= 40) {
        return 'strength-moderate';
    } else {
        return 'strength-weak';
    }
}

function getStrengthText(strengthLevel) {
    if (strengthLevel === 'strength-strong') {
        return 'Strong Password';
    } else if (strengthLevel === 'strength-moderate') {
        return 'Moderate Password';
    } else {
        return 'Weak Password';
    }
}
