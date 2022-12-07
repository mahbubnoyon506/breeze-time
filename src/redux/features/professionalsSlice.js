import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getProfessionals = createAsyncThunk('professionals/getProfessionals', async () => {
    return fetch('https://breeze-time-server.vercel.app/professional')
    .then( res => res.json());
});

const professionalsSlice = createSlice({
    name: 'professionals',
    initialState : {
        professionals: [],
        isLoading: false,
    },
    extraReducers: {
        [getProfessionals.pending] : (state, action) => {
            state.isLoading = true;
        },
        [getProfessionals.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.professionals = action.payload;
        },
        [getProfessionals.rejected] : (state, action) =>{
            state.isLoading = false;
        },
    },
});

export default professionalsSlice.reducer;