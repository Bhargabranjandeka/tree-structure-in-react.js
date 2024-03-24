import React from "react";

function useTraversehook(){

  const insertnode= (tree,folderId,item,isfolder)=>{
    

    if(tree.id===folderId && tree.isfolder){
      tree.items.unshift({
        id:new Date().getTime(),
        name:item,
        isfolder,
        items:[]
      });

      return tree
    }

    let lastnode=[];
    lastnode= tree.items.map((obj)=>{
      return insertnode(obj,folderId,item,isfolder)
    })

    return {...tree,items:lastnode}
  }

 

  return {insertnode}
}

export default useTraversehook;