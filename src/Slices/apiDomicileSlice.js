import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDomicileDetails = createAsyncThunk(
  'domicile/fetchDetails',
  async () => {
    try {
      const response = await fetch('https://localhost:7245/api/v1/DetailsDomicile');
      if (!response.ok) {
        throw new Error('Failed to fetch domicile details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const sendDomicileDetails = createAsyncThunk(
  'domicile/sendDetails',
  async (formData) => {
    try {
      const response = await fetch('https://localhost:7245/api/v1/DetailsDomicile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to send domicile details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null
};

const domicileSlice = createSlice({
  name: 'domicile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDomicileDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDomicileDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDomicileDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendDomicileDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendDomicileDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendDomicileDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectDomicileData = (state) => state.domicile.data;
export const selectDomicileLoading = (state) => state.domicile.loading;
export const selectDomicileError = (state) => state.domicile.error;

export default domicileSlice.reducer;
