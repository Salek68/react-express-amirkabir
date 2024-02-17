import { useState } from 'react';
import './App.css';

function App() {
const [name, setname] = useState("");
const [avg, setavg] = useState(0);
const [show, setshow] = useState(true);
const [avgn, setavgn] = useState("");
const [btn, setbtn] = useState("show");
const chek = (c)=>{
  if(c){
    setshow(false)
    setbtn("hide")
  }
  else{
    setshow(true)
    setbtn("show")
  }
}
const avgchek =(e)=>{
  setavg(e.target.value)
  const ee = e.target.value;
  if(ee>=18 && ee<=20){
    setavgn("aliii");
  }
  else if(ee>=14 && ee<=17){
    setavgn("kheyli khob");
  }
  else if(ee >= 10 && ee <= 13){
    setavgn("ghabel khob");
  }
  else{
    setavgn("nyaz be talash");
  }
} 
  return (
    <>
   
      <p >your name : </p>
      <p className={show ? 'hide' : ''}>{name}</p>
      <input type='text' className={show ? '' : 'hide'} onChange={(e)=> setname(e.target.value)}></input>
      <p>your avg : </p>
      <p className={show ? 'hide' : ''}>{avg}</p>
      <input type='number' className={show ? '' : 'hide'}  onChange={(e)=> avgchek(e)}></input>
      <br></br>
      <br></br>
      <br></br>
      <p  className={show ? 'hide' : ''}>{avgn}</p>
      <button type='submit' onClick={()=>chek(show)} >{btn}</button>

    </>
  )
}

export default App
