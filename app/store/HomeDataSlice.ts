
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {tableData} from '../mockapi/homeTable'
import { tableProps } from '../types/homeTable';
interface todayOrder {
  data:tableProps[] ;
  error:string|null;
  loading:boolean 
}
const initialState:todayOrder = {
data:[],
error:null,
loading:false
}
export const todayOrderData=createAsyncThunk(
 'order/todayOrder',
 async(_,{rejectWithValue})=>{
   try {
    //api is here
    return tableData
   } catch (error) {
    return rejectWithValue('data is not found')
   }
 }
)

const homeDataSlice= createSlice({
name:'homedata',
initialState,
reducers:{},
extraReducers:(builder:any)=>{
builder.addCase(todayOrderData.pending,(state:any)=>{
    state.loading=true;
    state.error=null
})
.addCase(todayOrderData.fulfilled,(state:any,action:PayloadAction<tableProps[]>)=>{
    state.loading=false;
    state.data=action.payload;
    state.error=null
}).
addCase(todayOrderData.rejected,(state:any)=>{
 state.loading=false;
 state.error=state.error.message || "something went wrong"  
})
}
})

export default homeDataSlice.reducer