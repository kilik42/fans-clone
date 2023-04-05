import { View, Text, ImageBackground, StyleSheet,Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router';
import users from '../../Asset BundleFans/assets/data/users';
import {Ionicons,FontAwesome} from '@expo/vector-icons';

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
          <Text style = {{color: 'white'}}>1.4k posts 64.3K Likes 15.3 Fans</Text>

      </ImageBackground>

      <View>
        <Image src ={user.avatar} style={styles.userImage} />
       <FontAwesome name="share-square-o" size={24} color="black" />
     


      {/* <Text
      onPress={()=>router.back()}
      > Go Back </Text> */}
                      <Text style={{color: 'white', fontSize:20, fontWeight: '500', marginBottom:5,}}>{user.name}</Text>
                      </View>
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
    },
    userImage:{
      width: 75,
      height: 75,
      borderRadius: 50,
      marginLeft: 10,
      borderColor: 'white',
      borderWidth: 3,
      
  },

  });

export default ProfilePage;