import leaf from '../assets/leaf.png'
import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './splashscreen.css'
function Splash(){
  const navigate=useNavigate()
  useEffect(()=>{
    const Timer=setTimeout(()=>{
      navigate("/auth")
    },4500);
    return () => clearTimeout(Timer);
  },[])

  
    return(
          <div className="splash-container">
    <div className="splash-title-wrapper">
      <img src={leaf} alt="leaf" className="splash-leaf" />
      <h1 className="splash-title">PageMind</h1>
    </div>
    <p className="splash-motto">
      <span style={{animationDelay: '0s'}}>Every</span>
      <span style={{animationDelay: '1s'}}>page,</span>
      <span style={{animationDelay: '2s'}}>a</span>
      <span style={{animationDelay: '2.3s'}}>conversation</span>
    </p>
  </div>
)
   

}
export default Splash