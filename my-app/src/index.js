// import React from 'react';
// import ReactDom from 'react-dom';
// const eData={
//   sname:"Sandeep.R",
//   location:'Mumbai',
//   bloodGroup:'O+',
//   age:25,
//   profilImg:'https://www.w3schools.com/howto/img_avatar.png'
// }
// function Mybio(){
//   return(
//       <>
//         <div className='main-card'>
//             <div className='Img'>
//                 <img src={eData.profilImg}/>
//             </div>
//             <h1 id='Myname'>{eData.sname}</h1>
//             <p id='location'>Location</p>
//             <h2 id='loc'>{eData.location}</h2>
//             <p id='bldgrp'>Bloodgroup</p>
//             <h2 id='bldgp'>{eData.bloodGroup}</h2>
//             <p id='age'>Age</p>
//             <h2 id='ages'>{eData.age}</h2>
//         </div>
//     </>
//   )
// }
// ReactDom.render(<>
// <Mybio/>
// </>,document.getElementById('root'))










import React from "react";
import ReactDom from "react-dom";

const data=['sandeep','abdul','sanjay','prem','saurabh']
const Mydata=map((elem)=>{
  return(<>
    <h1>my name is {elem}</h1>
  </>)
})


ReactDom.render(<>
  <Mydata/>
</>,document.getElementById('root'))