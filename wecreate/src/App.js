
import './App.css';
import { data } from './data.js';
import {useEffect, useState} from 'react'
import header from "./Assets/assets/headers.png"
import img2 from "./Assets/assets/img2.png";
import axios from "axios"
import { Forms } from './Forms';

function App() {
  
  const[datas,setDatas]=useState([])
  const[onChange, setOnChange]=useState(false)
  const [data, setData]= useState({
    title:'First/changed product design', 
    text:"jkhakjd dsfihsidjf ihihsd aihdiajd ihdiahd iahdiahd ihdiahd"
  })

   useEffect(()=>{

    setTimeout(()=>{
      axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
      setDatas(res.data[0].body)
      console.log("data",datas)
    })
     }, 3000)
 
    
   })



  return (<><div className='all-box-container'>
    <div className="home-container" >
      <div className='left-content left-body'>
        <h4 className="mainHeading" onClick={()=>
         setData({title:'Second/changed product design',text: datas })}
          >Next</h4>

        <div className='text-body'><h1>{data.title}</h1>
        <h5>{data.text}</h5></div>
      </div>
      <div className='right-content '>
        <img src={header} alt='gfgf'/>
      </div>
    </div>
    <div className='second-box'>
      <div className='image-container-2'>
        <img  src={img2} alt='dgd' />
      </div>
      <div className='content-container-2'>
        <h1>{data.title}</h1>
      
        <h5>{data.text}</h5>
        <h5>{data.text}</h5>
      </div>
    </div>
    <div className='third-box' style={{marginTop:"-150px"}}>
      <div className='headline-3'>
        <h1>Product Design Services</h1>
      </div>
      <div className='tab-container'>
        <h2>tabone</h2><h2>tabtwo</h2><h2>tabthree</h2><h2>tabfour</h2><h2>tabfive</h2><h2>tab1six</h2>
      </div>
    </div>
    </div>
    <Forms/>
    </>
  );
}

export default App;
