import React from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "../Field";
import {requiredInput, correctInput}  from "../../Validation"
class LoginForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="username" component={myInput} type="text" placeholder="Username" validate = {[requiredInput, correctInput]} />
                <Field name="password" component={myInput} type="password" placeholder="Password" validate={[requiredInput]} />
              
                <button type="submit" lable="Submit" >Submit button </button>
            </form>
        )
    }
}
// Field props -> name: acts as identifier , component -> it is a prop that refers to the html element of that field.
LoginForm = reduxForm({
    form: 'login',
})(LoginForm); // this syntax you have to remember 

export default LoginForm