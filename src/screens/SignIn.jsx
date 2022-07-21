import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import TextInputField from '../components/TextInputField';
import { selectProfile, setFirstName, setProfile } from '../store/profileSlice'

function SignIn({}) {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    const [ isProfileLoaded, setIsProfileLoaded ] = useState(false);

    useEffect(() => {
        async function test() {
            const profileInStorage = await AsyncStorage.getItem('profile')

            if (profileInStorage == null) {
                await AsyncStorage.setItem('profile', profile)
            }

            setIsProfileLoaded(true)           
        }
        if (isProfileLoaded === false) {
            test()
        }
    }, [])

    // DEBUG
    useEffect(() => {
        if (isProfileLoaded === true) {
            AsyncStorage.getItem('profile').then(data => { console.log(data)} )
        }
    }, [isProfileLoaded])

    return (
        <View>
            { isProfileLoaded
                ? (<TextInputField
                    initialValue={profile.firstName}
                    onChange={(value) => dispatch(setFirstName(value))}
                    />
                )
                : <Text>Loading ... </Text>
            }
            
            
        </View>        
    )
}

export default SignIn;