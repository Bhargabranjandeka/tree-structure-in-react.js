import React from "react";
import "./style.css";
import data from "./Data/data.js"
import {useState} from 'react'
import Folder from './folder/Folder'
import useTraversehook from './useTraversehook'

export default function App() {
  const [explorer,setexplorer]=useState(data)
  const {insertnode,deletenode} =useTraversehook()
  
  const handleinsert= (folderId,item,isfolder)=>{
   const finaltree= insertnode(explorer,folderId,item,isfolder)
   setexplorer(finaltree)
  }

  

  
  return <Folder handleinsert={handleinsert} explorer={explorer}/>
}
