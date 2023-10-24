import { configureStore } from "@reduxjs/toolkit";
import { metricGraphReducer } from "./reducers/metricGraphReducer";
import { metricSubGraphsReducer } from "./reducers/metricSubGraphsReducer";
import { selectedMetricSubGraphReducer } from "./reducers/selectedMetricSubGraphReducer";
import { combosReducer } from "./reducers/combosReducer";

export const store = configureStore({
  reducer: {
    metricGraph: metricGraphReducer,
    metricSubGraphs: metricSubGraphsReducer,
    selectedMetricSubGraph: selectedMetricSubGraphReducer,
    combos: combosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
