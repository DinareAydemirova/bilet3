import React from 'react'
import style from "./basket.module.scss"
import { useSelector } from 'react-redux'
import { IoMdHeartEmpty } from "react-icons/io";


const Basket = () => {
  const basket=useSelector((state)=>state.basket.basket)
console.log(basket);
  return (
    <div className={style.main}>
        {basket?.map((elem) => {
          return (
            <div className={style.meals}>
              <img src={elem.image} alt="" />
              <div className={style.price}>
                <div className={style.desc}>
                  <h4>{elem.name}</h4>
                  <p>{elem.description}</p>
                 <div style={{display:'flex'}}>
                 <div>-</div>
                  <div>{elem.count}</div>
                  <div>+</div>
                 </div>
                </div>
                <h3>${elem.price}</h3>
              </div>
           
            <IoMdHeartEmpty />
            
            </div>
          );
        })}
        
      </div>
  )
}

export default Basket