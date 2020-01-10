import React from 'react'
import { connect } from 'react-redux';
import { getPets, getNewPet } from '../reducers/pet'

import './EditPet.css';


class EditPet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            date: new Date().toString(),
            name: '',
            location: '',
            age: '',
            breed: '',
            imageUrl: '',
            weight: '0.0',
            hair: 'Short',
            description: '',
            isVacinated: 'No',
            color: '',
            sex: 'Female',
        }
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    componentDidMount() {
        this.props.getPets();

    }

    handleSumbit(event) {
        event.preventDefault()
        let pets = this.props.pets
        pets.sort((a,b) => {
            return b.id - a.id
        })

        let obj = this.state
        obj.id = pets[0].id + 1
        console.log(obj)

        this.props.getNewPet(obj)
        this.props.routeProps.history.push(`/pet/${obj.id}`)
    }

    render() {
        return (
            <div className='pet-edit'>
                <h1>Add New Entry</h1>
                <div className ='pet-form-container' > 
                    <form onSubmit={this.handleSumbit} className = 'pet-form'>
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
    pets: state.pets.all

})

const mapDispatch = (dispatch) => ({
    getPets: () => dispatch(getPets()),
    getNewPet: (obj) => dispatch(getNewPet(obj))
})

export default connect(mapState, mapDispatch)(EditPet)