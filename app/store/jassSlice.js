import { createSlice } from "@reduxjs/toolkit";

export const jassSlice = createSlice({
    name: "jass",
    initialState: {
        parties: {}
    },
    reducers: {
        createParties: (state, action) => {
            state.parties = action.payload;
        },
        changeScore: (state, action) => {
            state.parties[action.party].score = action.payload.amount;
        },
        resetState: (state) => {
            state.parties = {};
        }
    },
});

// Action creators are generated for each case reducer function
export const { createParties, changeScore, resetState } = jassSlice.actions;

export default jassSlice.reducer;
