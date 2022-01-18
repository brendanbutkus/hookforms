
import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return(
        <div className="w-50 mx-auto">
            <form action="">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input className="form-control" name="firstName" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="form-control" name="lastName" type="text" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="text" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form-control" name="confirmPassword" type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>

            <div className="w-50 mx-auto"></div>
            <div>
                <h1>First Name: {firstName}</h1>
            </div>
            <div>
                <h1>Last Name: {lastName}</h1>
            </div>
            <div>
                <h1>Email: {email}</h1>
            </div>
            <div>
                <h1>Password: {password}</h1>
            </div>
            <div>
                <h1>Confirm Password: {confirmPassword}</h1>
            </div>

        </div>
    )
} 

export default HookForm;