import React, { useEffect, useState } from 'react'

const Fetch =(props)=>{


    const [data,setData] = useState([])




    const getData = ((value)=>{
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res)=>res.json())
            .then((res)=>setData(res))
            .catch((err)=>{console.log(err);})
    })
    return (
        <div>
            <button onClick={getData}>get fetch</button>
            
            <div>
                <span> {
                    data.map((value)=>{
                        return(
                            <div>
                            <h1>Country: {value.name}</h1>
                            <h2>Capital: {value.capital}</h2>
                            </div>
                            )
                        })
                    }</span>
                    </div>
        </div>
    )
}

export default Fetch