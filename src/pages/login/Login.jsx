import { Link } from "react-router-dom";

import "./login.scss";

function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input
          className="login__input"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password..."
        />
        <Link to="/">
          <button className="login__button">Login</button>
        </Link>
      </form>
      <button className="login__register-button">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;
