// ACTION
const SHOW_ALL_PETS = 'SHOW_ALL_PETS'
const SHOW_SINGLE_PET = 'SHOW_SINGLE_PET'
const DELETE_PET = 'DELETE_PET'
const EDIT_PET = 'EDIT_PET'
const ADD_PET = 'ADD_PET'

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

const gotEditPet = (pet) => ({
    type: EDIT_PET,
    pet
})

const gotNewPet = (pet) => ({
    type: ADD_PET,
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

export const getEditPet = (newPetObj) => {
    return async (dispatch, getState) => {
        const pets = JSON.parse(localStorage.getItem('pets'))

         //reset local storage and assin new array of pets without newly deleted pet
         localStorage.removeItem('pets');
         let newPets = []

        //cycle through old pets array exclude deleted petId
        pets.forEach((singlePet) => {
            if(newPetObj.id === singlePet.id) {
                newPets.push(newPetObj)
            } else {
                newPets.push(singlePet)
            }
        })

        localStorage.setItem('pets', JSON.stringify(newPets));
        dispatch(gotEditPet(newPetObj))


    }
}

export const getNewPet = (newPetObj) => {
    return async (dispatch, getState) => {
        //reset local storage and assin new array of pets with newly added pet
        const pets = JSON.parse(localStorage.getItem('pets'))
        pets.push(newPetObj)
        localStorage.setItem('pets', JSON.stringify(pets));

        dispatch(gotNewPet(newPetObj))

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
        case EDIT_PET:
            return {...state, single: action.pet}
        case ADD_PET:
            return {...state, single: action.pet}
        default:
        return state
    }
}

export default petReducer;