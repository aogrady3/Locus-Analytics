import React from 'react'
import { connect } from 'react-redux'
import { getPets } from '../reducers/pet'
import Pet from './Pet'

//SEED WITH Data
const petList = [
    {id:1,name:'Johnny',type:'cat',age:2},
    {id:2,name:'Sunny',type:'cat',age:2},  
    {id:3,name:'Terry',type:'cat',age:2},
    {id:4,name:'Jenny',type:'cat',age:5}
  ];
  if (localStorage.getItem("pets") === null) {
    localStorage.setItem('pets', JSON.stringify(petList));
  }

  

class HomePage extends React.Component  {
    componentDidMount() {
        this.props.getPets();
    }

    render() {
        console.log(this.props.pets)
        const pets = this.props.pets
        return (
            <div>
                <h1>All Cats for adoption</h1>
                <div>
                    {pets.map(pet => {
                        return <Pet key={pet.id} pet={pet} />
                    })}
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
})

export default connect(mapState, mapDispatch)(HomePage)