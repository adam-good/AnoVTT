

const Signup = () => {
    return (
    <div className="form-container">
        <form>
            <div className="form-group">
            <lable>Username: <input type="text" /></lable>
            <lable>Email: <input type="email" /></lable>
            <lable>Password: <input type="password" /></lable>
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    );
} 

export default Signup;
