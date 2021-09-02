import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../Features/countUpdate'
import partneredUpdate from '../Features/partneredUpdate'

export default configureStore({
  reducer: {
      counter: counterReducer,
      partnered: partneredUpdate
  }
})
