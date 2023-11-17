import RegistrationForm from "./RegistrationForm";

export default function Register(){
    return(
        <RegistrationForm
        usernameValue = ""
        fullNameValue = ""
        emailValue = ""
        phoneValue = ""
        passwordValue = ""
        action = "create"/>
        
    )
}