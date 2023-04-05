import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const ProfilePage = () => {
   const router = useRouter(); 
  return (
    <View style={{marginTop: 100}}>
      <Text>profilepage</Text>
      <Text> Go Back </Text>

    </View>
  )
}

export default ProfilePage;