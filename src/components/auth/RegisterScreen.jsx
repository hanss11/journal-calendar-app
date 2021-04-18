import React from "react";
import {Link} from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <>
      <h2 className="auth__title">Register</h2>

      <div>
        <form action="">
          <input
            className="auth__input"
            type="text"
            placeholder="name"
            name="name"
            autoComplete="off"
          />
          <input 
            className="auth__input"
            type="password" 
            placeholder="contraseña" 
            name="password" 
        />
        <input 
            className="auth__input"
            type="password" 
            placeholder="Confirmar contraseña" 
            name="password2" 
        />
          <button 
            type="submit" 
            className="btn btn-primary w-100 mb-5"
          >Login</button>
          
          <Link  
            className="links"
          to="/auth/login">Already register?</Link>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
