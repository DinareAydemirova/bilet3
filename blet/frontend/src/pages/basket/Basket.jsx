import React from "react";
import style from "./basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import {
  decreaseCount,
  increaseCount,
  removeAll,
  removeFromBasket,
} from "../../redux/slices/basketSlices";
import { addToFav, removeFromWishlist } from "../../redux/slices/wishlistSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  console.log(basket);

  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };

  const subTotal=()=>{
    return basket.reduce((acc,item)=>acc+ calculateTotalPrice(item),0)
  }


  const isInWishlist=(id)=>{
    return wishlist.some((item)=>item._id==id)
  }

  const handleToggleWishlist=(item)=>{
    if(isInWishlist(item._id)){
      dispatch(removeFromWishlist({_id:item._id}))
    }else{
      dispatch(addToFav(item))
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(removeAll())}>clear all</button>
      <div className={style.main}>
        {basket?.map((elem) => {
          return (
            <div key={elem._id} className={style.meals}>
              <img src={elem.image} alt="" />
              <div className={style.price}>
                <div className={style.desc}>
                  <h4>{elem.name}</h4>
                  <p>{elem.description}</p>
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={() => dispatch(decreaseCount({ _id: elem._id }))}
                    >
                      -
                    </button>
                    <div>{elem.count}</div>
                    <button
                      onClick={() => dispatch(increaseCount({ _id: elem._id }))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <h3>{`$${calculateTotalPrice(elem)}`}</h3>
              </div>

              <FaHeart style={{color:isInWishlist(elem._id)? "red":"black"}}  onClick={()=>handleToggleWishlist(elem)}/>
              <FaTrash
                onClick={() => dispatch(removeFromBasket({ _id: elem._id }))}
              />
            </div>
          );
        })}
      </div>
      <h2>{`$${subTotal()}`}</h2>
    </div>
  );
};

export default Basket;
