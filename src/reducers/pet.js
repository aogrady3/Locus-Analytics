// ACTION
const SHOW_ALL_PETS = 'SHOW_ALL_PETS'
const SHOW_SINGLE_PET = 'SHOW_SINGLE_PET'

//ACTION CREATOR
const gotPets = (pets) => ({
    type: SHOW_ALL_PETS,
    pets
})

const gotSinglePet = (pet) => ({
    type: SHOW_SINGLE_PET,
    pet
})

//THUNK CREATOR
export const getPets = () => {
    return async (disptach, getState) => {
        //Store all pets in local storage
        const pets = JSON.parse(localStorage.getItem('pets'))
        disptach(gotPets(pets))
    }
}

export const getSinglePet = (id) => {
    return async (dispatch, getState) => {
        //get array of items from local storage
        const pets = JSON.parse(localStorage.getItem('pets'))

        //convert into Int for comparisons
        const pageId = parseInt(id) 
        let pet = {}

        //Iterate over each pet until we find matching PageId Number! 
        pets.forEach((singlePet) => {
            if(pageId === singlePet.id) {
                pet = singlePet
            }
        })
        dispatch(gotSinglePet(pet))
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
        case SHOW_SINGLE_PET:
            return {...state, single: action.pet}
        default:
        return state
    }
}

export default petReducer;