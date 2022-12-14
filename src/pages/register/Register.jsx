import { Link } from "react-router-dom";

import "./register.scss";

function Register() {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Username</label>
        <input
          className="register__input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="register__input"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="register__button">Register</button>
      </form>
      <button className="register__login-button">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Register;
