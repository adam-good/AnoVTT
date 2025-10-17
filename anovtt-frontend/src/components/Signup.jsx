import { useState } from "react";

const SignupForm = () => {
    const [formDate, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value 
        }));
        console.log("State Updated");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Submit Form Data to Server
        console.log(`Form Data Submitted: ${event.target}`);
    };
    
    return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="Enter Username"
            />
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter Email"
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="password"
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
} 

export default SignupForm;
