import { Text, StyleSheet, View, Image,ImageBackground } from 'react-native'
import React, { Component } from 'react'
import {Link} from 'expo-router';


export default function UserCard({user} ){
    // const {user} = props.user;
  return ( 
   <Link  href={`/user`} asChild> 
                  
  <ImageBackground 
    source={{uri: user.coverImage}}
    style={styles.userCard}>
        {/* image */}
        <View style={styles.overlay} />
        <Image source={user.avatar} style={styles.userImage} />
        {/* name and handle */}

        <View>
            <Text style={{color: 'white', fontSize: 22, fontWeight: '500'}}>{user.name} </Text>
            <Text style={{color: 'white'}}>@{user.handle}</Text>
           
             
        </View>
       

    </ImageBackground>

    </Link>
    ) 
}


const styles = StyleSheet.create({

  
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    userCard: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 100,
      
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5,

    },
    userImage:{
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
        borderColor: 'white',
        borderWidth: 3,
        
    },
})