import { Link } from "react-router-dom";
import "../styles/styles.css";

function Login() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className="container">
      <h1 className="heading">Login Form</h1>
      <div className="form_container">
        <div className="left">
          <img className="img" src="./images/login.jpg" alt="login" />
        </div>
        <div className="right">
          <button className="google_btn" onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
