import { createSlice } from "@reduxjs/toolkit";


const initialValue = {}

export const formSlice = createSlice({
    name: "form",
    initialState: {
        forms: initialValue
    },
    reducers:{
        addForm:(state,action)=> {
            state.forms = [action.payload, ...state.forms];
            // setTodos(newTodos);
        }
    }
})
export const { addForm } = formSlice.actions;
export default formSlice.reducer;