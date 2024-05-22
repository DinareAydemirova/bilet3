import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./wishlist.module.scss"
import { FaHeart } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { addToFav, clearAll, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import { SlBasket } from "react-icons/sl";
import { addBasket } from '../../redux/slices/basketSlices';
import { Helmet } from 'react-helmet';

const Wishlist = () => {
  const wishlist =useSelector((state)=>state.wishlist.wishlist)
  const dispatch=useDispatch()

  const isInWishlist=(id)=>{
    return wishlist.some((item)=>item._id===id)
  }
  
  const handleToggleWishlist=(item)=>{
    if(isInWishlist(item._id)){
      dispatch(removeFromWishlist({ _id: item._id }))
    }
  }

  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title> Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <button onClick={()=>dispatch(clearAll())}>clear all</button>
      <div className={style.main}>
        {wishlist?.map((elem) => {
          return (
            <div key={elem._id} className={style.meals}>
              <img src={elem.image} alt="" />
              <div className={style.price}>
                <div className={style.desc}>
                  <h4>{elem.name}</h4>
                  <p>{elem.description}</p>
                 
                </div>
              </div>

              <FaHeart style={{color:isInWishlist(elem._id)?"red":"black"}} onClick={()=>handleToggleWishlist(elem)}/>
              <SlBasket onClick={()=>dispatch(addBasket(elem))}/>
              <FaTrash onClick={()=>dispatch(removeFromWishlist({_id:elem._id}))}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Wishlist