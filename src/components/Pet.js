import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css';


const Pet = ({ pet }) => {
    console.log(pet)
    return (
        <div className = 'pet'>
            <Link>
            <div className='pet-image'>
            <img src ={pet.imageUrl}></img>
            </div>
            <div className = 'pet-summary'>
                <h2>{pet.name}</h2>
                <span>{pet.age} years old</span> - <span>{pet.sex}</span>
                <p>{pet.location}</p>
            </div>
            </Link>
        </div>
    )
}

export default Pet