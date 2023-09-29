import { configureStore } from "@reduxjs/toolkit";
import Tickets from "./TicketsSlice"
const store=configureStore({
    reducer :{Tickets}
})

export default store