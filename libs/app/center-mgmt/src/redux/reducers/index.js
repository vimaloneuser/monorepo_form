import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toastr from "toastr";
import "toastr/build/toastr.min.css";
// Slice
const initialState = {
    centers: []
}

export const saveCenterDataThunk = createAsyncThunk(
    'centers/saveCenterDataThunk',
    async ({ values, cb }) => {
        const response = await fetch('http://localhost:3000/centers', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        return { result: response.json(), cb }
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
    extraReducers: (builder) => {
        builder.addCase(saveCenterDataThunk.fulfilled, (state, { payload }) => {
            state.centers.push(payload.result);
            toastr.success("Center saved successfully.");
            payload.cb();
        }),
            builder.addCase(saveCenterDataThunk.pending, (state, { payload }) => {

            }),
            builder.addCase(saveCenterDataThunk.rejected, (state, action) => {
                toastr.error("Something went wrong.");
            })
    }
});

export const { saveCenterData } = centerSlice.actions
export const centerReducer = centerSlice.reducer