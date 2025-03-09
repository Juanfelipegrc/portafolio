import { createSlice } from '@reduxjs/toolkit';


export const animationsSlice = createSlice({
    name: 'animationsSlice',
    initialState: {
        lastPage: '',
    },
    reducers: {
        setLastPage: (state, {payload}) => {
            state.lastPage = payload;
        }
    }
});


export const { setLastPage } = animationsSlice.actions;