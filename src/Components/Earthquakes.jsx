import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Earthquakes() {
    const [data,setData]= useState([]);
    async function getData(){
        const api  =('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=10')
        const result =await fetch(api);
        const getResult = await result.json();
        setData(getResult.features);
        console.log(getResult)
       }


     useEffect(() => { 
        getData();
    }, [data]); 
       
        
     
   
         
     return (
         <>
             <h1>Latest Earthquakes</h1>
             <div className='home-page'>
                 {data.map(datum=>{
                    return(
                  
                    <div className='cards'>
                     <h3>Place({datum.properties.place})</h3>
                     <h3>Time ({datum.properties.time})</h3>
                     <Link  to={`/detail/${datum.id}`} key={datum.id}>
                     <button>Read In Detail</button>
                     </Link>
                    </div>
                   
                 )})}
                
             </div>
        </>
     )
}
  

  
export default Earthquakes
