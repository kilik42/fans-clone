import { View, Text, ImageBackground, StyleSheet,Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import users from '../../Asset BundleFans/assets/data/users';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import {useState} from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../src/components/Post';
import { FlatList } from 'react-native-gesture-handler';
import Post from '../../src/components/Post';
const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);


   const {id}= useSearchParams();
   const user = users.find((user) => user.id === id);

   if (!user) {
    return  <Text>user not found!</Text>
   }

  return (
    <View >
  
    <FlatList
    data={posts}
    renderItem={({item}) => <Post post={item} />}
    ListHeaderComponent={() => (
       <UserProfileHeader user={user} 
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
   />
    )}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  
});
export default ProfilePage;