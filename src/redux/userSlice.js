import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        id: null,
        name: 'Guest',
        full_name: null,
        photo: null,
        gender: null,
        token: null,
        loggedin: false,
    },

    reducers: {
        rdx_loggin: function (state, {payload}) {

            console.log('rdx_loggin: payload', payload)
            state.loggedin = true;
            state.id = payload.id;
            // state.full_name = payload.firstName + ' ' + payload.lastname;
            state.full_name = `${payload.firstName} ${payload.lastname}`;
            state.name = payload.firstName;
            state.photo = payload.image;
            state.gender = payload.gender;
            state.token = payload.token
        },
        rdx_logout: function (state) {
            state.loggedin = false;
            state.id = null;
            state.name = 'Guest';
            state.full_name = null;
            state.photo = null;
            state.gender = null;
            state.token = null
        }
    }
});


export default userSlice.reducer;

export const { rdx_loggin, rdx_logout } = userSlice.actions;