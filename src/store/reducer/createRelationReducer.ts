import { createSlice } from "@reduxjs/toolkit";

import {
	addCreateRelationAction,
	removeCreateRelationAction,
} from "../actions/createRelationActions";
import { CreateRelationState } from "../types";

const initialState: CreateRelationState = {};

export const createRelationSlice = createSlice({
	name: "createRelation",
	initialState,
	reducers: {
		addCreateRelation: addCreateRelationAction,
		removeCreateRelation: removeCreateRelationAction,
	},
});

export const { addCreateRelation, removeCreateRelation } =
	createRelationSlice.actions;

export const createRelationReducer = createRelationSlice.reducer;
