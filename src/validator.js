
const validator = (name, value, required, minLength, pattern, namepattern, passwordPattern) => {
    const newErrors = [];

    if (required) {
        if (!value) {
            newErrors.push(`${name} is required`);
        }
    }

    if (minLength) {
        if (value.length < minLength) {
            newErrors.push(`${name} must be at least ${minLength} characters`);
        }
    }

    if (pattern) {
        if (!pattern.test(value)) {
            newErrors.push(` ${name} is invalid`);
        }
    }
    // if (namepattern) {
    //     if (!namepattern.test(value)) {
    //         newErrors.push(` ${name}  should be at least 2 words `);
    //     }
    // }
    if (passwordPattern) {
        if (!passwordPattern.test(value)) {
            newErrors.push(` ${name}   should be at least 6 characters, containing Lower and Upper case characters and also numbers `);
        }
    //  else (user.confirm.value !== user.password.value) 
    //     newErrors.push(`Re typed password does not match the password.`);
    }
   
    return newErrors;
}

export default validator;