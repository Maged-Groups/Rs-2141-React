import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState: {
        showLogin: false,
        showRegister: false,
        darkMode: false
    },
    reducers: {
        rdx_view_loggin: (state, { payload }) => {
            state.showLogin = payload
            state.showRegister = false
        },
        rdx_view_register: (state, { payload }) => {
            state.showRegister = payload
            state.showLogin = false
        },


    }
});


export default settingsSlice.reducer
export const { rdx_show_loggin, rdx_hide_loggin, rdx_view_loggin, rdx_view_register } = settingsSlice.actions;

