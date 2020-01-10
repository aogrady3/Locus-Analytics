import React from 'react'
import { connect } from 'react-redux';
import { getSinglePet, getEditPet } from '../reducers/pet'

import './EditPet.css';


class EditPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.pet.id,
            date: this.props.pet.date,
            name: this.props.pet.name,
            age: this.props.pet.age,
            breed: this.props.pet.breed,
            imageUrl: this.props.pet.imageUrl,
            weight: this.props.pet.weight,
            hair: this.props.pet.hair,
            description: this.props.pet.description,
            isVacinated: this.props.pet.isVacinated,
            color: this.props.pet.color,
            sex: this.props.pet.sex,
            location: this.props.pet.location
        }
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    componentDidMount() {
        //Grab single Pet from URL
        const pageId = this.props.routeProps.match.params.petId
        this.props.getSinglePet(pageId)
    }

    handleSumbit(obj) {
        this.props.getEditPet(obj)
        this.props.routeProps.history.push(`/pet/${obj.id}`)
    }

    render() {
        const pet = this.props.pet
        return (
            <div className='pet-edit'>
                <h1>Edit Entry - {pet.name}</h1>
                <div className ='pet-form-container'> 
                    <form onSubmit={() => this.handleSumbit(this.state)} className = 'pet-form'>
                    <label htmlFor="Name" >Pet Name </label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={evt => this.setState({ name: evt.target.value })}
                    />
                     <label htmlFor="Age" >Pet Age </label>
                    <input
                        name="age"
                        type="text"
                        value={this.state.age}
                        onChange={evt => this.setState({ age: evt.target.value })}
                    />
                     <label htmlFor="Location" >Pet Location </label>
                    <input
                        name="location"
                        type="text"
                        value={this.state.location}
                        onChange={evt => this.setState({ location: evt.target.value })}
                    />
                     <label htmlFor="Breed">Pet Breed </label>
                    <input
                        name="breed"
                        type="text"
                        value={this.state.breed}
                        onChange={evt => this.setState({ breed: evt.target.value })}
                    />
                     <label htmlFor="Image">Pet Image URL </label>
                    <input
                        name="image"
                        type="text"
                        value={this.state.imageUrl}
                        onChange={evt => this.setState({ imageUrl: evt.target.value })}
                    />
                    <label htmlFor="Color">Pet Color </label>
                    <input
                        name="color"
                        type="text"
                        value={this.state.color}
                        onChange={evt => this.setState({ color: evt.target.value })}
                    />
                     <label htmlFor="Weight" >Pet Weight </label>
                    <input
                        name="weight"
                        type="text"
                        value={this.state.weight}
                        onChange={evt => this.setState({ weight: evt.target.value })}
                    />
                    <label htmlFor="Hair">Hair Length</label>
                    <select
                    name='hair'
                    value={this.state.hair}
                    onChange={evt => this.setState({ hair: evt.target.value })}
                    >
                        <option value='Short'>Short</option>
                        <option value='Medium'>Medium</option>
                        <option value='Long'>Long</option>
                    </select>
                    <label htmlFor="Hair">Is Vacinated</label>
                    <select
                    name='vacinated'
                    value={this.state.isVacinated}
                    onChange={evt => this.setState({ isVacinated: evt.target.value })}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label htmlFor="Hair">Sex </label>
                    <select
                    name='sex'
                    value={this.state.sex}
                    onChange={evt => this.setState({ sex: evt.target.value })}
                    >
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <label htmlFor="Description">Pet Description</label>
                    <textarea 
                        name='description'
                        type='text'
                        value={this.state.description}
                        rows="15" cols="50"
                        onChange={evt => this.setState({ description: evt.target.value })}
                    />
                    <button type="submit" className="sumbit-button" >Sumbit</button>
                    </form>
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
    getEditPet: (obj) => dispatch(getEditPet(obj))
})

export default connect(mapState, mapDispatch)(EditPet)