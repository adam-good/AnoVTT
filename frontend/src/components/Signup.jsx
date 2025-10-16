

const SignupForm = () => {
    return (
    <div className="form-container">
        <form>
            <div className="form-group">
            <lable htmlFor="username">Username:</lable>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
            />
            <lable>Email:</lable>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
            />
            <lable>Password:</lable>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
} 

export default SignupForm;
