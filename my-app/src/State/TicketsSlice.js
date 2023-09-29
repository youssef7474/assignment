import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    records:[]
    ,
    loading:false
    ,
    error:null
    ,
    TicketDetails:[]
}



export const fetchTickets = createAsyncThunk(
    "Tickets/fetchTickets",
    async (_, thunkApi) => {
      const { rejectWithValue } = thunkApi;
  
      try {
        const res = await axios.get("http://localhost:8000/tickets");
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



  export const insertTickets = createAsyncThunk(
    "Tickets/insertTickets",
    async (item, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const res = await axios.post("http://localhost:8000/tickets", item, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        });
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


  export const TicketDetails = createAsyncThunk("Tickets/TicketDetails",
    async(item,thunkApi)=>{
        const {rejectWithValue}= thunkApi;
        try {
            return(item)
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
  )


  export const DeleteTickets = createAsyncThunk("Tickets/DeleteTickets", async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await axios.delete(`http://localhost:8000/tickets/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });



  export const editTicket = createAsyncThunk(
    "Tickets/editTicket",
    async (item, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`http://localhost:8000/tickets/${item.id}`, {
          method: "PATCH",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



const TicketsSlice= createSlice({

    name: 'Tickets',
    initialState,
    reducers:{},
    extraReducers:{

        [fetchTickets.pending]:(state)=>{
            state.loading=true
            state.error=false
        }
        ,
        [fetchTickets.fulfilled]:(state,action)=>{
            state.loading=false
            state.records=action.payload
        }
        ,
        [fetchTickets.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
        //
        ,
        [insertTickets.pending]:(state)=>{
            state.loading=true
            state.error=false
        }
        ,
        [insertTickets.fulfilled]:(state,action)=>{
            state.loading=false
            state.records.push(action.payload)
        }
        ,
        [insertTickets.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
        ,
        //
        
        [TicketDetails.pending]:(state)=>{
            state.loading=true
            state.error=false
        }
        ,
        [TicketDetails.fulfilled]:(state,action)=>{
            state.loading=false
            state.TicketDetails=action.payload
        }
        ,
        [TicketDetails.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
        ,
        //
        [DeleteTickets.pending]:(state)=>{
            state.loading=true
            state.error=false
        }
        ,
        [DeleteTickets.fulfilled]:(state,action)=>{
            state.loading=false
            state.records=state.records.filter((el)=>el.id !== action.payload)
        }
        ,
        [DeleteTickets.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
        //
        ,
        [editTicket.pending]: (state) => {
            state.loading = true;
            state.error = null;
          },
          [editTicket.fulfilled]: (state, action) => {
            state.loading = false;
            state.record = action.payload;
          },
          [editTicket.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },

    },


});

export default TicketsSlice.reducer;