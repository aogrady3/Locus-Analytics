// ACTION
const SHOW_ALL_PETS = 'SHOW_ALL_PETS'

//ACTION CREATOR
const gotPets = (pets) => ({
    type: SHOW_ALL_PETS,
    pets
})

//THUNK CREATOR
export const getPets = () => {
    return async (disptach, getState) => {
        const pets = JSON.parse(localStorage.getItem('pets'))
        console.log(pets)
        disptach(gotPets(pets))
    }
}


//INITIAL STATE
const initalState = {
    all: [],
    single: {
    }
}

//REDUCER
const petReducer = (state = initalState, action) => {
    switch (action.type) {
        case SHOW_ALL_PETS:
            return {...state, all: action.pets }
        default:
        return state
    }
}

export default petReducer;