import React, { useEffect, useState } from "react";
import style from "./menu.module.scss";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../redux/slices/basketSlices";
import { addToFav, removeFromWishlist } from "../../../redux/slices/wishlistSlice";

const Menu = () => {
  const [data, setData] = useState([]);
  const wishlist =useSelector((state)=>state.wishlist.wishlist)
  const dispatch=useDispatch()


const isInWishlist=(id)=>{
  return wishlist.some((item)=>item._id===id)
}

const handleToggleWishlist=(item)=>{
  if(isInWishlist(item._id)){
    dispatch(removeFromWishlist({ _id: item._id }))
  }else{
    dispatch(addToFav(item))
  }
}

  useEffect(() => {
    axios.get("/menu").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);


  

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h2>Discover Our Exclusive Menu</h2>
        <div className={style.menus}>
          <p className={style.food}>Main</p>
          <p className={style.food}>Desert</p>

          <p className={style.food}>Drinks</p>
        </div>
       
      </div>
      <div className={style.main}>
        {data?.map((elem) => {
          return (
            <div key={elem._id} className={style.meals}>
              <img src={elem.image} alt="" />
              <div className={style.price}>
                <div className={style.desc}>
                  <h4>{elem.name}</h4>
                  <p>{elem.description}</p>
                </div>
                <h3>${elem.price}</h3>
              </div>
            <button className={style.basket} onClick={()=>dispatch(addBasket(elem))}>add to cart</button>
            <FaHeart style={{color:isInWishlist(elem._id)?"red":"black"}} onClick={()=>handleToggleWishlist(elem)}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
