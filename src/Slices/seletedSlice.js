import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    request: 'casa',
}

const selectedSlice = createSlice({
    name:"selected",
    initialState,
    reducers: {
        setSelected: (state, action) => {
            state.request = action.payload
          },
    }
})

export const {
    setSelected
  } = selectedSlice.actions;

  export default selectedSlice.reducer;
