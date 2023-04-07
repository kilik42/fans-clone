import { View, Text, ImageBackground, StyleSheet,Image, SafeAreaView, Pressable } from 'react-native'
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
            <Ionicons name="arrow-back" size={24} color="white" style={{padding: 10, marginTop: -50}} onPress={()=>router.back()} />
          <Text style = {{color: 'white'}}>1.4k posts 64.3K Likes 15.3 Fans</Text>
          
          </SafeAreaView>
          

      </ImageBackground>

      <View style={{padding: 10}}>
            <View style ={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10}}>
                            <Image source ={user.avatar} style={styles.userImage} />
                          <FontAwesome name="share-square-o" size={24} color="black" />
                        
      </View>

      


                      <Text
                      onPress={()=>router.back()}
                      > Go Back </Text>
                      
                      <Text style={{color: 'white', fontSize:20, fontWeight: '500', marginVertical:5,}}>{user.name}</Text>

                      <Text style={{color: 'white', fontSize:20, fontWeight: '500', marginBottom:5,}}>@{user.handle}</Text>
                      <Text style={{color: 'gray', marginBottom: 10,}}>{user.bio}</Text>

                      <Text style={{color: 'gray', marginTop: 20, fontWeight: 'bold'}}> Subscription </Text>
        
            <Pressable style ={styles.button}>
              <Text style ={styles.buttonText}>Subscribed</Text>
              <Text style ={styles.buttonText}>for free</Text>
            </Pressable>
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
  buttonText:{
    color: 'royalblue',
    fontSize: 20,
    fontWeight: 'bold',
    // marginVertical: 10,
  },
  button:{
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between',

  },
});
export default ProfilePage;