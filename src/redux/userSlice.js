import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState : {
        currentUser : null
    },
    reducers : {
        loginStart: (state) => {},
        loginSuccess: (state, action) => {
            state.currentUser = action.payload // меняем старый стейт на новые данные из экшна
        },
        loginFailure: (state) => {} 
    }
})

export default userSlice.reducer
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
