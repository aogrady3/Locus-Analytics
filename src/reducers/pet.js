// ACTION
const SHOW_ALL_PETS = 'SHOW_ALL_PETS'
const SHOW_SINGLE_PET = 'SHOW_SINGLE_PET'
const DELETE_PET = 'DELETE_PET'

//ACTION CREATOR
const gotPets = (pets) => ({
    type: SHOW_ALL_PETS,
    pets
})

const gotSinglePet = (pet) => ({
    type: SHOW_SINGLE_PET,
    pet
})

const gotDeletedPet = (petId) => ({
    type: DELETE_PET,
    petId
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

        //convert string page number into Int for comparisons
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

export const getDeletedPet = (deletedPetId) => {
    return async (dispatch, getState) => {
        //get array of items from local storage
        const pets = JSON.parse(localStorage.getItem('pets'))
        
        //reset local storage and assin new array of pets without newly deleted pet
        localStorage.removeItem('pets');
        let newPets = []

        //cycle through old pets array exclude deleted petId
        pets.forEach((singlePet) => {
            if(deletedPetId !== singlePet.id) {
                newPets.push(singlePet)
            } 
        })

        localStorage.setItem('pets', JSON.stringify(newPets));
        dispatch(gotDeletedPet(deletedPetId))
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
        case DELETE_PET:
            const newPetList = state.all.filter(pet => {
                    return pet.id !== action.petId
                })
            return {...state, all: newPetList}
        default:
        return state
    }
}

export default petReducer;