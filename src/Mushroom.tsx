import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from './data/data'


const Mushroom = () => {
    const params = useParams()
    const mushroomData = data.find((mushroom) => mushroom.name === params.mushroom)
    const navigate = useNavigate()

    return (
        <>
    
        <div>
            <h1>{mushroomData?.name} <span className='italic'>({mushroomData?.scientificName})</span></h1>
            <img src={mushroomData?.image} alt={mushroomData?.name} /> 
            <p>{mushroomData?.description}</p>
            <p>{mushroomData?.occurrence}</p>
            <p>{mushroomData?.['picking months']}</p>
            <p>{mushroomData?.['primary habitat']}</p>
            <p>{mushroomData?.edible}</p>
            <p>{mushroomData?.recipes}</p>
            <button onClick={() => navigate(-1)}>Return</button>
        </div>
        
        </>
)
}

export default Mushroom