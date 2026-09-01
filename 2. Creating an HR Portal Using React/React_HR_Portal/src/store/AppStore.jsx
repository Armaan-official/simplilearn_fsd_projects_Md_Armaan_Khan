import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from '../slices/EmployeeSlice'

const store = configureStore({
    reducer: {
        employees: EmployeeSlice
    }
})

export default store;