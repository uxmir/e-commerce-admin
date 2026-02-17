import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from './HomeDataSlice'
import productReducer from './ProductSlice'
export const store=configureStore({
reducer:{
homeData:homeDataReducer,
product:productReducer
}
})
export type RootState=ReturnType<typeof store.getState>
export type appDispatch=typeof store.dispatch