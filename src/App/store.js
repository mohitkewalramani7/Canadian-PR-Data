import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../Features/countUpdate'
import partneredUpdate from '../Features/partneredUpdate'
import sectionCUpdate from '../Features/sectionCUpdate'

export default configureStore({
  reducer: {
      counter: counterReducer,
      partnered: partneredUpdate,
      sectionC: sectionCUpdate
  }
})
