import { useDispatch } from "react-redux";
import useLogin from "../../hooks/useLogin";
import { login } from "../../features/auth/authSlice";
import WithLogging from "../../components/HOC/WithLogging";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const {
    email,
    password,
    enableSubmit,
    handleLoginSubmit,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin({
    onLogin: (formData) => dispatch(login(formData)),
  });

  return (
    <>
      <div className="login-body">
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <input
            id="inputSubmit"
            type="submit"
            value="OK"
            className="submit-button"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </>
  );
}

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
