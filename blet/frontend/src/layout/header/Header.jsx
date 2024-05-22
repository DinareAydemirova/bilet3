import React from "react";
import style from "./header.module.scss";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.nav}>
          <h2>Tasty</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="">Basket</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
          </ul>
          <div className={style.baswis}>
            <Link to="/basket">
              <FaBasketShopping style={{ color: "white" }} />
            </Link>
            <Link to="/wishlist">
              <FaHeart style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
