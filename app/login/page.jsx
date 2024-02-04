import styles from "../ui-component/login/login.module.css";
import LoginForm from "../ui-component/login/loginForm/loginFrom";

const LoginPage = () => {
  return (
    <div className="container mx-auto pt-4 pb-4">
      <LoginForm/>
    </div>
  );
};

export default LoginPage;