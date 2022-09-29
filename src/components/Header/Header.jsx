import React from "react";
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/create">Создать пост</Link>
        <Link to="/register">Регистрация</Link>
        <Link to="/login">Логин</Link>
      </nav>
    </header>
  );
};

export default Header;
