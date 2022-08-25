

import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    state: "vvgnli",
};

export const vvgnliReducer = createReducer(initialState, {

    state: (state, action) => {
        state.state = action.payload
    },
})