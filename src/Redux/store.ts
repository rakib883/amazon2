import { configureStore } from '@reduxjs/toolkit'
import amazoneReducer from './amazoneSlice'  // Import the reducer

export const store = configureStore({
  reducer: {
    addCart: amazoneReducer,  // Use the reducer here
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
