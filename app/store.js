import { configureStore } from "@reduxjs/toolkit";
import jassReducer from './store/jassSlice'

export default configureStore({
    reducer: {
        jass: jassReducer
    },
});
