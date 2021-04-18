import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h2 className="auth__title">Login</h2>

      <div>
        <form action="">
          <input
            className="auth__input"
            type="text"
            placeholder="ingrese su email"
            name="name"
            autoComplete="off"
          />
          <input 
            className="auth__input"
            type="password" 
            placeholder="contraseña" 
            name="password" 
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
