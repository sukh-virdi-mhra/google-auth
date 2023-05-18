import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
