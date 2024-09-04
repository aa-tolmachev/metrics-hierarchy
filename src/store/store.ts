import { configureStore } from "@reduxjs/toolkit";

import { addMetricNodesReducer } from "./reducer/addMetricNodeReducer";
import { createRelationReducer } from "./reducer/createRelationReducer";
import { fullMetricReducer } from "./reducer/fullMetricReducer";
import { globalMenuReducer } from "./reducer/globalMenuReducer";
import { metricGraphReducer } from "./reducer/metricGraphReducer";

export const store = configureStore({
	reducer: {
		globalMenu: globalMenuReducer,
		metricGraph: metricGraphReducer,
		addMetricNodes: addMetricNodesReducer,
		createRelation: createRelationReducer,
		fullMetric: fullMetricReducer,
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
