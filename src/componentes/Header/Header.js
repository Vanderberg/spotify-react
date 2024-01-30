import React from 'react';
import './Header.css'
import small_left from '../../assets/icons/small-left.png';
import small_right from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={small_left} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={small_right} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                    placeholder="O que você quer ouvir?" value="" />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;