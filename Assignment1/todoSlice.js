import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "ToDoSlice",
    initialState: {
       inputText :'',  
       inputlistGlobal : [],
       newList :[],
    },
    reducers: {
       addInputListGlobal : (state,action) => {
       if (action.payload != "") {
            state.inputlistGlobal = [ ...state.inputlistGlobal, action.payload];
           }
       },
       
       deleteInputListGlobal : (state,action) => {
       
        return {inputlistGlobal: state.inputlistGlobal.filter((e,index) => index !== action.payload)}

        // const filtered = state.inputlistGlobal.filter( (e, index) => index !== action.payload);
        // return {
        //     inputlistGlobal: filtered,
        // };



         },
       }
})

export const { addInputListGlobal, deleteInputListGlobal } = todoSlice.actions;
export const todoReducer = todoSlice.reducer; 