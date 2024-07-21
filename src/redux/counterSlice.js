import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        counter: 0,
    },
    reducers: {
        increase: (state) => { state.counter++ },
        decrease: (state) => { state.counter-- },
        reset: (state) => { state.counter = 0 }
    }
});


// Functions
// const  increase = counterSlice.actions.increase;
// const  decrease = counterSlice.actions.decrease;
// const  reset = counterSlice.actions.reset;
// OR Destruct
export const { increase, decrease, reset } = counterSlice.actions;

// State
export default counterSlice.reducer;
