import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Slice
const initialState = {
    centers: []
}

export const saveCenterDataThunk = createAsyncThunk(
    'centers/saveCenterDataThunk',
    async (val) => {
        const response = await fetch('http://localhost:3000/centers', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(val),
        });
        return response.json()
    }
)

const centerSlice = createSlice({
    name: 'centers',
    initialState,
    reducers: {
        saveCenterData: (state, action) => {
            state.centers.push(action.payload);
        }
    },
    extraReducers: {
        [saveCenterDataThunk.pending]: (state) => {

        },
        [saveCenterDataThunk.fulfilled]: (state, { payload }) => {
            state.centers.push(payload);
        },
        [saveCenterDataThunk.rejected]: (state) => {

        }
    }
});

export const { saveCenterData } = centerSlice.actions
export const centerReducer = centerSlice.reducer