import { createSlice } from '@reduxjs/toolkit'

export const partnered = createSlice({
  name: 'partnered',
  initialState: {
    value: false
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action
    }
  }
})

// Action creators are generated for each case reducer function
export const { setValue } = partnered.actions

export default partnered.reducer
