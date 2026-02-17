import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from './HomeDataSlice'
export const store=configureStore({
reducer:{
homeData:homeDataReducer
}
})
export type RootState=ReturnType<typeof store.getState>
export type appDispatch=typeof store.dispatch