

import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    approvedPhotos: [],
};

export const communityReducer = createReducer(initialState, {

    approvedPhotos: (state, action) => {
        state.approvedPhotos = action.payload
    },
})