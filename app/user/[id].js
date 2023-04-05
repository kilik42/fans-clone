import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import users from '../../Asset BundleFans/assets/data/users';
import {Ionicons} from '@expo/vector-icons';

const ProfilePage = () => {
   const router = useRouter(); 
   const {id}= useSearchParams();
   const user = users.find((user) => user.id === id);

   if (!user) {
    return  <Text>user not found!</Text>
   }

  return (
    <View >
      <ImageBackground source ={{uri: user.coverImage}} style={{width: '100%', height: 200}} >

          <View style={styles.overlay} />

          <SafeAreaView style={{margin: 10}}>
            <Ionicons name="arrow-back" size={24} color="white" style={{padding: 10}} onPress={()=>router.back()} />
          </SafeAreaView>
          

      </ImageBackground>
      <Text>profilepage:{user.name}</Text>
      
      {/* <Text>profilepage:{user.coverImage}</Text> */}
      <Text>profilebio:{user.bio}</Text>
      {/* <Text>profilepage:{user.location}</Text> */}


      {/* <Text
      onPress={()=>router.back()}
      > Go Back </Text> */}

    </View>
  )
}

const styles = StyleSheet.create({
  cover: {
        height: 200,
        width: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
    }
  });

export default ProfilePage;