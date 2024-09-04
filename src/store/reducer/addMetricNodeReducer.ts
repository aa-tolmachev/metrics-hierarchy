import { createSlice } from "@reduxjs/toolkit";

import {
	addMetricNodesAction,
	removeFirstMetricNodeAction,
	removeMetricNodesAction,
} from "../actions/addMetricNodesActions";
import { AddMetricNodesState } from "../types";

const initialState: AddMetricNodesState = {
	metrics: [],
};

export const addMetricNodesSlice = createSlice({
	name: "addMetricNodes",
	initialState,
	reducers: {
		addMetricNodes: addMetricNodesAction,
		removeFirstMetricNode: removeFirstMetricNodeAction,
		removeMetricNodes: removeMetricNodesAction,
	},
});

export const { addMetricNodes, removeFirstMetricNode, removeMetricNodes } =
	addMetricNodesSlice.actions;

export const addMetricNodesReducer = addMetricNodesSlice.reducer;
