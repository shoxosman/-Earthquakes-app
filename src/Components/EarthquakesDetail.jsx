import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {FaSearchLocation ,FaArrowLeft ,FaCalendarTimes ,FaArrowDown} from 'react-icons/fa'
function EarthquakesDetail() {
let {id} =useParams()
const [detail,setDetail]= useState([]);
    async function getData(){
        const result =await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`);
        const getResult = await result.json();
        setDetail(getResult.properties);
        console.log(getResult.properties)
       }


     useEffect(() => { 
        getData();
    },[id]); 
   return <div className='detail-page'>
     <div className='detail-card'>
   <h2 ><FaSearchLocation/>Loaction:{detail?.products?.origin[0]?.properties?.title} </h2>
                <h3><FaCalendarTimes/>Time: {detail?.time}</h3>
                <h3><FaArrowDown/>Depth: {detail?.products?.origin[0]?.properties?.depth}Km</h3>
                <h3>Latitude: {detail?.products?.origin[0]?.properties?.latitude}</h3>
                <h3>Longitude: {detail?.products?.origin[0]?.properties?.longitude}</h3>
                <h3>Magnitude: {detail?.mag}</h3>
                <Link to={"/"}><FaArrowLeft/></Link>
                </div>

  </div>;
}

export default EarthquakesDetail;
