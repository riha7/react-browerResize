import React,{useState,useEffect} from "react";
import "./style.css";
const useWindowResize=()=>{
  const [size,setsize] = useState([window.innerHeight,window.innerWidth])
  useEffect(()=>{
    const handleResize=()=>{
      setsize([window.innerHeight,window.innerWidth])
    }
    window.addEventListener("resize",handleResize)
  })
  return size;
}
export default function App() {
  const [innerHeight,innerWidth] = useWindowResize()
  return (
    <div>
      <h1>height : {innerHeight}</h1>
      <p>width: {innerWidth}</p>
    </div>
  );
}
