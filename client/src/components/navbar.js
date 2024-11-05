import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/">Casa</Link>
      <Link to="/create-recipe">Crear Receta</Link>
      <Link to="/saved-recipes">Guardar Receta</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Iniciar sesion/Registrar</Link>
      ) : (
        <button onClick={logout}> Salir de sesion </button>
      )}
    </div>
  );
};
