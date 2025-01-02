import { useState } from "react";
import LoginForm from "../../../Component/Forms/LoginForm";
import toastr from "toastr";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSateChange = (e, name) => {
        if (name === "email") setEmail(e.target.value.trim());
        if (name === "password") setPassword(e.target.value.trim());
    }

    const onSubmitForm = () => {
        if (email.length > 0 && password.length > 0) {

        } else {
            return toastr.warning("Please enter the input field.")
        }
    }

    return <LoginForm
        setState={onSateChange}
        onSubmit={onSubmitForm}
        state={{ email, password }}
    />
}

export default LoginPage;