import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const LoginScreen = () => {


  const dispatch = useDispatch()

  const [formValues,handleInputChange] = useForm({
    email: 'hanssbcr@gmail.com',
    password: '123456'
  });

  const {email,password} = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log(email,password);
    dispatch(login(123, 'hanss'));
  }

  return (
    <>
      <h2 className="auth__title">Login</h2>

      <div>
        <form onSubmit={handleLogin}>
          <input
            className="auth__input"
            type="text"
            placeholder="ingrese su email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
          <input 
            className="auth__input"
            type="password" 
            placeholder="contraseña" 
            name="password"
            value={password}
            onChange={handleInputChange}
        />
          <button 
            type="submit" 
            className="btn btn-primary"
          >Login</button>
          
          <div className="auth__social-networks mt-5">
            <p>Login with social networks</p>

            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>

          <Link  
            className="links mt-5"
          to="/auth/register">Create new account</Link>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
