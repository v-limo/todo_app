import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { USerType } from '../../types/userTypes'
import { login } from './login'
import { register } from './register'
import { googleLogin } from './googleLogin'

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
    logout(state: authState, action: PayloadAction) {
      state.isLoading = false
      state.error = false
      state.user = null
      localStorage.removeItem("user")
    }
  },
  extraReducers: (builder) => {


    //Register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.user = null
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload))
    })

    builder.addCase(register.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.user = null
    })


    //Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
      state.user = null
      state.error = false
    })

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.user = null
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload))
    })

    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.user = null
    })

    //googleLogin
    builder.addCase(googleLogin.pending, (state) => {
      state.isLoading = true
      state.user = null
      state.error = false
    })

    builder.addCase(googleLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.user = null
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload))
    })

    builder.addCase(googleLogin.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.user = null
    })

  },
})

export const { logout } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
