export const requiredInput = (input) => 
input ? undefined : `Input is required`;

export const correctInput = input => 
input !=='nishant' ? 'incorrect username' : undefined;

export const matchInput = (input, allInputs) => 
    input === allInputs.password ? undefined : 'password do not match'



























// export const validate = inputs => {
//     const errors = {} ;
//     if (!inputs.username) {
//         errors.username = "Enter your username";
//     }
//     else if (inputs.username !=='nishant') {
//         errors.username = "User name is incorrect"
//     }
//     if (!inputs.password) {
//         errors.password = "Enter your password"
//     }
//     return errors;
// };