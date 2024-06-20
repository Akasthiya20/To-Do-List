// import React, { useState } from 'react'

// const Content = () => {
//   const [name,setName]=useState("Earn")
//     function handle(){
//         const names=["grow","earn","give"]
//         const int=Math.floor(Math.random()*3);
//         setName(names[int]);
//     }
//    /* const show=(name)=>{
//       console.log(`${name} is learning ReactJs`)
//     }*/
//   return (
//     <main>
//    <p> Let's {name} money</p>
//    <button onClick={handle}>
//     Click
//     </button>
//    </main>
//   )
// }


import React from 'react';
import ItemsList from './ItemsList';

const Content=({items,handleCheck,handleDelete})=>{
  
  return (
    <main>
      {(items.length)?(
   <ItemsList
   items={items}   
   handleCheck={handleCheck}
   handleDelete={handleDelete}
   />
   ) :
  (
    <p style={{marginTop:'500 px'}}> Your List is empty</p>
  )
}
 </main>  
  )
}


export default Content