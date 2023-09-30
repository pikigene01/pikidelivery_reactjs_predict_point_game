import React, { useEffect,useState } from "react";
import useLocalStorage from "../services/useLocalStorage";

export default function YouTube() {
 const [copiedText,setCopiedText] = useState("")
 useEffect(()=>{
  navigator.clipboard.readText().then((text)=>{
    setCopiedText(text);
  })
 },[])

 useEffect(()=>{
var textWrap = document.getElementById('text')

if(copiedText.length > 2){
  let i = 0;
  setInterval(()=>{
   i++;
   textWrap.innerText = copiedText.substring(0,i)
   if(i >= copiedText.length){
    textWrap.innerHTML = copiedText;
   }
  },2)
}
 },[copiedText])
  return (
    <div id="text">
      <h1 style={{color:"#333"}}>PikiDelivery</h1>
    </div>
  );
}
