import React, { useState } from 'react'
import SignUpForm from '../../../Component/Forms/SignUpForm'
import toastr from 'toastr';

const SignUpPage=()=>{

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [organization, setOrganization]= useState("");
    const [location, setLocation]= useState("");
    const [password, setPassword]= useState("");

    const onSateChange=(e,name)=>{
        if(name==="email")setEmail(e.target.value.trim());
        if(name==="name")setName(e.target.value.trim());
        if(name==="organization")setOrganization(e.target.value.trim());
        if(name==="location")setLocation(e.target.value.trim());
        if(name==="password")setPassword(e.target.value.trim());
    }

    const onSubmitForm=()=>{
        if(name.length>0 && location.length>0 && email.length>0 && organization.length>0 && password.length>0){

        }else{
            return toastr.warning("Please enter the mandatory field.")
        }
    }

    return <SignUpForm 
    setState={onSateChange} 
    onSubmit={onSubmitForm} 
    state={{name, email,location,organization,password}}
    />
}

export default SignUpPage;