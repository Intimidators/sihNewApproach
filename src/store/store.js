import { configureStore } from "@reduxjs/toolkit";
import { communityReducer } from "./reducers/CommunityReducer";
import { dashboardReducer } from "./reducers/DashboardReducer";
import { researchReducer } from "./reducers/ResearchWorkPortalReducer";
import { vvgnliReducer } from "./reducers/VVGnliReducer";


const store = configureStore({
    reducer: {
        community: communityReducer,
        dashboard: dashboardReducer,
        vvgnli:vvgnliReducer,
        research:researchReducer
    }
});

export default store;