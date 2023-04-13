import { View, Text, Image } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const Post = ({post}) => {
  return (
    <View  style={{marginVertical: 15 }}>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Image source = {post.User.avatar} style={{width:50, height:50, borderRadius:25}} />
        <View style={{marginLeft:10}}>

          </View>
        <Text
        style={{fontWeight: '600',fontSize: 16,  marginBottom: 3 }}
        >{post.User.name}</Text>
        <Text >@{post.User.handle}</Text>
      </View>

      <View style={{marginLeft: 'auto',
       flexDirection:'row', 
       alignItems: 'center'}}>
        <Text 
        style={{marginRight: 3, color: 'gray'}}
        
        >{post.caption}</Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />

      </View>

      <Text style={{margin: 10, lineHeight: 18}}>{post.text}</Text>
      <Image source={post.image} style={{width:'100%', aspectRatio: 1}} />
    </View>
  )
}

export default Post