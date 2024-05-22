import React from "react";
import style from "./header.module.scss";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const basket=useSelector((state)=>state.basket.basket)
  let basketCount=basket?.reduce((acc,elem)=>acc+=elem.count,0)
  let wishlist=useSelector((state)=>state.wishlist.wishlist)


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
              <span style={{color:"white"}}>{basketCount}</span>
            </Link>
            <Link to="/wishlist">
              <FaHeart style={{ color: "white" }} />
              <span style={{color:"white"}}>{wishlist.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
