import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import users from '../../Asset BundleFans/assets/data/users';

const ProfilePage = () => {
   const router = useRouter(); 
   const {id}= useSearchParams();
   const user = users.find((user) => user.id === id);

   if (!user) {
    return  <Text>user not found!</Text>
   }

  return (
    <View style={{marginTop: 100}}>
      <Text>profilepage:{user.name}</Text>
      <Text>profilepage:{user.handle}</Text>
      <Text>profilepage:{user.id}</Text>
      <Text>profilepage:{user.email}</Text>
      <Text>profilepage:{user.avatar}</Text>
      {/* <Text>profilepage:{user.coverImage}</Text> */}
      <Text>profilepage:{user.about}</Text>
      <Text>profilepage:{user.location}</Text>


      <Text
      onPress={()=>router.back()}
      > Go Back </Text>

    </View>
  )
}

export default ProfilePage;