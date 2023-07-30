//we are using redux here to store the models of cars that are required 
//redux is like a state and slice is a small part that is car
import { createSlice } from "@reduxjs/toolkit"

const initialState={ //array of objects or cars here that we need 
    cars:["Model S", "Model 3", "Model X", "Model Y"]
}
const carSlice=createSlice({ //now here creating slice
    name:"car",
    initialState, //reducer has initial state when you start appplication  
    reducers:{} //reducers which manipulate the state that is say a function which will add new cars , thats what redux-toolkit is used for
})
export const selectCars=state=>state.car.cars //this will map the car with the objects present in array , and when selected a slice will be created , thus this can select car individually
export default carSlice.reducer
//now tell the store.js what reducer you have 