import { configureStore } from '@reduxjs/toolkit'


import counterSlice from './counterSlice'
import userSlice from './userSlice'
import settingsSlice from './settingsSlice'


const store = configureStore({
    reducer: {
        counterSlice,
        userSlice,
        settingsSlice
    }
});

export default store;