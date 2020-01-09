import React from 'react'
import { connect } from 'react-redux'
import { getSinglePet } from '../reducers/pet'

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
        console.log(this.props.pet)
        return (
            <div>
                Hello Single Page!
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