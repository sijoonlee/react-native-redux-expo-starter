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
        //await AsyncStorage.setItem('profile', state)
      },
      setFirstName: (state, action) => {
        state.firstName = action.payload
        //await AsyncStorage.setItem('profile', state)
      },
      setLastName: (state, action) => {
        state.lastName = action.payload
        //await AsyncStorage.setItem('profile', state)
      },
      setProfile: (state, action) => {
        state.email = action.payload?.email ?? '';
        state.firstName = action.payload?.firstName ?? '';
        state.lastName = action.payload?.lastName ?? '';
      },
    },
  })
  
  export const { signIn, signOff, setEmail, setFirstName, setLastName, setProfile } = profileSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectProfile = (state) => state.profile

  export default profileSlice.reducer