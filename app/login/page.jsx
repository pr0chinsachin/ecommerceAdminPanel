import styles from "../ui-component/login/login.module.css";
import LoginForm from "../ui-component/login/loginForm/loginFrom";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;