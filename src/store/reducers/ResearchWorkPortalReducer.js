

import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    approvedResearchWork: [],
};

export const researchReducer = createReducer(initialState, {

    approvedResearchWork: (state, action) => {
        state.approvedResearchWork = action.payload
    },
})