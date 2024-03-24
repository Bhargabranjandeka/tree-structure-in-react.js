import React from "react";
import {useState} from 'react'

function Folder({explorer,handleinsert=()=>{}}){
  const[expand,setexpand]=useState(false)
  const [showInput,setshowInput]=useState({
    visibility:false,
    isfolder:false
  })

  function handleClick(e,isfolder){
    e.stopPropagation();
    setexpand(true)
    setshowInput({...showInput,visibility:true,isfolder})
  }

  function onAdd(e){
    if(e.keyCode===13 && e.target.value){
      //add logic //
      handleinsert(explorer.id,e.target.value,showInput.isfolder)
      setshowInput({...showInput,visibility:false})
    }
  }

  
  
  
  if(explorer.isfolder){
    return <div className="folder">
    <div className="name" onClick={()=>setexpand(!expand)}>
      {`💳${explorer.name}`}
       
      <button className="btn" onClick={(e)=>handleClick(e,true)}>{`+ 📂`}</button>
      <button className="btn" onClick={(e)=>handleClick(e,false)}>{`+ 📃`}</button>
      
    </div>

    {showInput.visibility && <div>
      <span>{showInput.isfolder? `📂`:`📃`}</span>
      <input 
      type="text" 
      onBlur={()=>setshowInput({...showInput,visibility:false})}
      autoFocus
      onKeyDown={(e)=>onAdd(e)}/>
      </div>}
    
    {expand && <>{explorer.items.map((exp)=>{
      return <Folder handleinsert={handleinsert} explorer={exp}/>
    })}</>}

  </div>
  }
  else{
    return <div className="folder name">{`📄${explorer.name}`}</div>
  }
}

export default Folder