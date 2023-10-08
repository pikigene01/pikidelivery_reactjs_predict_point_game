import React, { useEffect,useState } from "react";
import useLocalStorage from "../services/useLocalStorage";
import { useSelector,useDispatch } from "react-redux";
import { buttonClick } from "../redux/cartReducer";

export default function YouTube() {
 const {count} = useSelector(state=>state.cart)
 const dispatch = useDispatch();
  const addCount =(e)=>{
    dispatch(buttonClick());
  }
  return (
    <div id="text">
      <h1 onClick={()=>addCount()} style={{color:"#333"}}>PikiDelivery {count}</h1>
    </div>
  );
}
