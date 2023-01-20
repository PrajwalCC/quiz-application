import { createSlice } from "@reduxjs/toolkit";

/** create reducer */

// by using createSlice function we dont need to create action file manually
// here reducers object in questionReducer is acting like action
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    // here we updating the intialstate
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

// exporting action
export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

// exporting reducer
export default questionReducer.reducer;