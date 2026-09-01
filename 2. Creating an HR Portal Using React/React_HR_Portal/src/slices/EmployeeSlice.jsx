import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/employees";

export const getEmployees = createAsyncThunk(
    'employees/getEmployees',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    }
)

export const addEmployees = createAsyncThunk(
    'employees/addEmployees',
    async (newEmployee) => {
        const response = await axios.post(BASE_URL, newEmployee);
        return response.data
    }
)

export const deleteEmployees = createAsyncThunk(
    'employees/deleteEmployees',
    async (id) => {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return id;
    }
)

export const editEmployees = createAsyncThunk(
    'employees/editEmployees',
    async ({id, newInfo}) => {
        const response = await axios.patch(`${BASE_URL}/${id}`, newInfo);
        return response.data
    }
)

const initialState = {
    employees: [],
    loading: false,
    error: null
}


const EmployeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployees.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        });
        builder.addCase(getEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(addEmployees.fulfilled, (state, action) => {
            state.employees.push(action.payload);
        });
        builder.addCase(deleteEmployees.fulfilled, (state, action) => {
            state.employees = state.employees.filter( emp => emp.id !== action.payload)
        });
        builder.addCase(editEmployees.fulfilled, (state, action) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id)
            if (index !== -1) {
                state.employees[index] = action.payload
            }
        });
    }

})

export default EmployeeSlice.reducer