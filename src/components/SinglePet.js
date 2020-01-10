import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSinglePet, getDeletedPet } from '../reducers/pet'

import './SinglePet.css';


class SinglePet extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        //Grab single Pet from URL
        const pageId = this.props.routeProps.match.params.petId
        this.props.getSinglePet(pageId)
    }

    handleDelete(id) {
        //delete from local storage and then redirect
        this.props.getDeletedPet(id)
        this.props.routeProps.history.push('/')
    }

    render() {
        const pet = this.props.pet
        if(pet.id) {
        return (
            <div className = 'one-pet'>
                <div className = 'left-container'>
                <div className = 'one-pet-image'>
                    <img src={pet.imageUrl} />
                </div>
                <div className = 'one-pet-details'>
                    <h4>Date Listed: {pet.date} </h4>
                    <p>Breed:{pet.breed}</p>
                    <p>Hair Length: {pet.hair}</p>
                    <p>Color: {pet.color}</p>
                    <p>Weight: {pet.weight} lbs</p>
                    <p>Is Vacinated: {pet.isVacinated === 'true' ? 'Yes' : 'No'}</p>
                </div>
                </div>
                <div className = 'one-pet-summary'>
                    <h1>{pet.name}</h1>
                    <h3>{pet.age} years old - {pet.sex}</h3> 
                    <h2>{pet.location}</h2>
                    <p>{pet.description}</p>
                    <div className = 'buttons'>
                        <Link to={`/pet/${pet.id}/edit`}><button className="edit-button">Edit Entry</button></Link>
                        <button onClick={() => this.handleDelete(pet.id)} className='delete-button'>Delete Entry</button>
                    </div>
                </div>
            </div>
        )
        } else {
            return (
                <div>
                    Page does not exisit
                </div>
            )
        }
    }
}

const mapState = (state) => ({
    pet: state.pets.single

})

const mapDispatch = (dispatch) => ({
    getSinglePet: (id) => dispatch(getSinglePet(id)),
    getDeletedPet: (id) => dispatch(getDeletedPet(id))
    
})

export default connect(mapState, mapDispatch)(SinglePet)