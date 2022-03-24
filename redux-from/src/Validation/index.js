export const validate = inputs => {
    const errors = {} ;
    if (!inputs.username) {
        errors.username = "Enter your username";
    }
    else if (inputs.username !=='nishant') {
        errors.username = "User name is incorrect"
    }
    if (!inputs.password) {
        errors.password = "Enter your password"
    }
    return errors;
};