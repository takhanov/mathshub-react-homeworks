import React from "react";
import logo from "../assets/investment-calculator-logo.png";


function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='логотип'/>
            <h1>Калькулятор Инвестиций</h1>
        </header>)
}

export default Header;