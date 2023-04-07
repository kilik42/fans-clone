import { View, Text, ImageBackground, StyleSheet,Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import users from '../../Asset BundleFans/assets/data/users';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import {useState} from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

   const router = useRouter(); 
   const {id}= useSearchParams();
   const user = users.find((user) => user.id === id);

   if (!user) {
    return  <Text>user not found!</Text>
   }

  return (
   <UserProfileHeader user={user}  />
  )
}

const styles = StyleSheet.create({
  
});
export default ProfilePage;