import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
function Fetch(props){
    const [temp,setTemp]=useState(true);
    const [desc,setDesc]=useState('');
    const [icon,setIcon]=useState('');
    
    const [isReady,setReady]=useState(false);
    useEffect(()=>{
        fetch(url)
        .then(result=>result.json())
        .then(jsonresult=>{
            setTemp(jsonresult.main.temp);
            setDesc(jsonresult.weather[0].main);
            setIcon(jsonresult.weather[0].icon);
            setReady(true);
        }).catch(err=>console.error(err));
    })

return (
    <div>
        {isReady &&
        <div>
            <p>Temperature:{temp}</p>
            <p>Description:{desc}</p>
            <img src='http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753'/>
    </div>}
    </div>
)
};
export default Fetch;