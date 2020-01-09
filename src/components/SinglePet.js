import React from 'react'
import { connect } from 'react-redux'
import { getSinglePet } from '../reducers/pet'
import './SinglePet.css';


class SinglePet extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //Grab single Pet from URL
        const pageId = this.props.routeProps.match.params.petId
        this.props.getSinglePet(pageId)
    }

    render() {
        const pet = this.props.pet
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
                    <p>Is Vacinated: {(pet.isVacinated) ? 'Yes' : 'No'}</p>
                </div>
                </div>
                <div className = 'one-pet-summary'>
                    <h1>{pet.name}</h1>
                    <h3>{pet.age} years old - {pet.sex}</h3> 
                    <h2>{pet.location}</h2>
                    <p>{pet.description}</p>
                    
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    pet: state.pets.single

})

const mapDispatch = (dispatch) => ({
    getSinglePet: (id) => dispatch(getSinglePet(id)),

})

export default connect(mapState, mapDispatch)(SinglePet)