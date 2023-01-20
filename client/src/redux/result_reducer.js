import { createSlice } from "@reduxjs/toolkit"

// by using createSlice function we dont need to create action file manually
// here reducers object in questionReducer is acting like action
export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        // user name will store in userId and user selected options will store in result
        userId : null,
        result : []
    },
    reducers : {
        // here we updating the intialstate
        setUserId : (state, action) => {
            // action.payload is user input
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : []
            }
        }
    }
})

// exporting action
export const { setUserId, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

// exporting reducer
export default resultReducer.reducer;