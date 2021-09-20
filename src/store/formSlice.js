import { createSlice } from "@reduxjs/toolkit";


const initialValue = {
    fullname: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
}

export const formSlice = createSlice({
    name: "form",
    initialState: {
        forms: initialValue
    },
    reducers:{
        addForm:(state,action)=> {
            state.forms = action.payload;
            // state.forms = [action.payload, ...state.forms];
        }
    }
})
export const { addForm } = formSlice.actions;
export default formSlice.reducer;