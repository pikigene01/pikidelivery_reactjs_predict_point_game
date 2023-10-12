import React, { useEffect,useState } from "react";
import useLocalStorage from "../services/useLocalStorage";
import { useSelector,useDispatch } from "react-redux";
import { buttonClick } from "../redux/cartReducer";
import { useParams, useSearchParams } from "react-router-dom";

export default function YouTube() {
  const [searchParams,setSearchParams] = useSearchParams({q:""});
  const query = searchParams.get("q");

  const hanldeParams =(e)=>{
    setSearchParams(prev => {
      prev.set("q", e.target.value);
      return prev;
    })
  }
 const {count} = useSelector(state=>state.cart)
 const dispatch = useDispatch();
  const addCount =(e)=>{
    dispatch(buttonClick());
  }
  return (
    <div id="text">
      <h1 onClick={()=>addCount()} style={{color:"#333"}}>PikiDelivery {count}</h1>
      <input type="text" value={query} onChange={hanldeParams}/>
    </div>
  );
}
