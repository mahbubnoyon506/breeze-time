import { configureStore } from "@reduxjs/toolkit";
import ProfessionalReducer from './features/professionalsSlice'

export default configureStore({
    reducer: {
        professionals : ProfessionalReducer,
    }
})