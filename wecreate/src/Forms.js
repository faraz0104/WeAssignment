import React, { useState } from 'react'
import './App.css';

export const Forms = () => {
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[allEntry,setAllEntry]=useState([])


 const submitForm=(e)=>{
    e.preventDefault()
    const newEntry= {email:email,name:name}
    setAllEntry([...allEntry,newEntry])
    console.log(allEntry)

 }

  return (
<>
<form onSubmit={submitForm} className="containABC">
    <div className='inp1'>
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        autoComplete='off'/>
    </div>
    <div className='inp2'>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" value={name} id="name"
             onChange={(e)=>setName(e.target.value)}
        autoComplete='off'/>
    </div>
    <button className="btn" type="submit">Submit</button>
</form>
<div>
    {
        allEntry.map((elem)=>{
            return(
                <div className='shwDetail'>
                    <p>{elem.email}</p>
                    <p>{elem.name}</p>

                    </div>

            )
        })
    }
</div>
</>
  )
}
