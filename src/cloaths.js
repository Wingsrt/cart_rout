
import { useState } from "react";
import { useEffect } from "react";

function Cloaths() {


  useEffect(() => {
  fet()
   
  },[]);

  const [dbdata,setdb]=useState([]);


  function fet(){
    fetch('http://localhost:3000/cloaths')
  .then(response => response.json())
  .then(data => setdb(data));
  }

  console.log(dbdata)


  return (
    <>
     <div className='main'>
       {dbdata.map(function(el){

        return(
          <div className='sdiv'>
          <h1>{el.name}</h1>
          <img src={el.img} />
          </div>
        )
       })}
     </div>

    
    </>
    
  );
}

export default Cloaths;
