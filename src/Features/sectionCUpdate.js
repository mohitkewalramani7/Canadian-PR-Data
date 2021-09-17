import { createSlice } from '@reduxjs/toolkit'

export const sectionCUpdate = createSlice({
  name: 'sectionC',
  initialState: {
    education: null,
    firstLanguage: null,
    canadianWorkExperience: null
  },
  reducers: {
    setEducationValue: (state, action) => {
      state.education = action.payload
    },
    setFirstLanguageValue: (state, action) => {
      state.firstLanguage = action.payload
    },
    setCanadianWorkExperienceValue: (state, action) => {
      state.canadianWorkExperience = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  setEducationValue,
  setFirstLanguageValue,
  setCanadianWorkExperienceValue
} = sectionCUpdate.actions

export default sectionCUpdate.reducer
