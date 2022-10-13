import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {      
        filterReduser: (state, action) =>  state = action.payload
    },
    },
);

export const { filterReduser } = filterSlice.actions;

