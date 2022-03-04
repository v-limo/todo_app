import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { USerType } from '../../types/userTypes'
import { register } from './register'

type authState = {
  user: USerType | null
  isLoading: boolean
  error: boolean
}

const initialState = {
  user: JSON.parse(localStorage.getItem('user')!) || null,
  isLoading: false,
  error: false,
} as authState

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState(state: authState, action: PayloadAction) {
      state.isLoading = false
      state.error = false
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.user = payload
      localStorage.set("user", JSON.stringify(payload))
    })

    builder.addCase(register.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.user = null
    })
  },
})

export const { resetState } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
