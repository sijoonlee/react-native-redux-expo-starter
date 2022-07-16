import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import TextInputField from '../components/TextInputField';
import { selectProfile, setFirstName } from '../store/profileSlice'

function SignIn({}) {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    return (
        <View>
            <TextInputField
                initialValue={profile.firstName}
                onChange={(value) => dispatch(setFirstName(value))}
            />
        </View>        
    )
}

export default SignIn;