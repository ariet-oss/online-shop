import React from "react";
import search from "../../assets/svg/search.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import cart from "../../assets/svg/cart.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"; 
import { addList } from "../../locales/redux/cart/cart";

function Header() {   
  const {items} =useSelector((state) => state.wishlist)
  const {t,i18n}= useTranslation()
  const {value} = useSelector((state)=> state.counter)
  const {} = useSelector((state)=> state.counter)
  function handleChangeLng(event) {
    const lng = event.target.value
    i18n.changeLanguage(lng)
  }
  
  return (
    <div>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t('logo')}</h1>
          <ul>
            <li>
              <Link to="/">{t('trans')}</Link>
            </li>
            <li>
              <Link to="/about">{t('ab')}</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Sing up</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="" />
          </div>
          <div className="icons">
            <div className="icon">
             <Link to={'wishlist2'}>
              <img src={wishlist} alt="" />
              </Link>
              <div className="count">{items.length}</div>
              </div>
             <Link to={'wishlist'}> 
            <img src={cart} alt="" />
            <div className="count">{ items.length}</div>
                  </Link>  
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
