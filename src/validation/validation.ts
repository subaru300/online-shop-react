const validateInput = (
    inputValue: string,
    isPhoneInput: boolean,
    isEmailInput: boolean,
    isAddressInput: boolean,
    wasTouched: boolean
) => {
    let errorText: string;
    let regexPattern: RegExp;

    const maxCharacters = isPhoneInput ? 15 : isEmailInput ? 25 : isAddressInput ? 100 : 25;

    if (isPhoneInput) {
        regexPattern = /^\+?\d+$/;
        errorText = 'Enter a valid phone number';
    } else if (isEmailInput) {
        regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorText = 'Enter a correct email address';
    } else if (isAddressInput) {
        regexPattern = /^[a-zA-Z0-9\s,'-]*$/;
        errorText = `Enter a correct address (max ${maxCharacters} characters)`;
    } else {
        regexPattern = /^[a-zA-Zа-яА-Я ]+$/;
        errorText = `Enter your name (max ${maxCharacters} characters)`;
    }

    const isValid = regexPattern.test(inputValue) && inputValue.length <= maxCharacters;
    const isInvalid = (!isValid && inputValue.trim() !== '') || (wasTouched && inputValue.trim() === '');

    return {
        isValid,
        isInvalid,
        errorText,
    };
};

export default validateInput;