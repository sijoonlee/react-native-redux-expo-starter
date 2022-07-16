import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: 'test',
    lastName: '',
    email: '',
    isSignedIn: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      signIn: (state) => {
        state.isSignedIn = true;
      },
      signOff: (state) => {
        state.isSignedIn = false;
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setFirstName: (state, action) => {
        console.log(action)
        state.firstName = action.payload
      },
      setLastName: (state, action) => {
        state.lastName = action.payload
      },
    },
  })
  
  export const { signIn, signOff, setEmail, setFirstName, setLastName } = profileSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectProfile = (state) => { console.log(state); return state.profile }

  export default profileSlice.reducer