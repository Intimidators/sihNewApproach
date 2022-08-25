import { configureStore } from "@reduxjs/toolkit";
import { communityReducer } from "./reducers/CommunityReducer";
import { dashboardReducer } from "./reducers/DashboardReducer";


const store = configureStore({
    reducer: {
        community: communityReducer,
        dashboard: dashboardReducer
    }
});

export default store;