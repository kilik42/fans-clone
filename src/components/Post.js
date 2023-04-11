import { View, Text, Image } from 'react-native'
import React from 'react'

const Post = ({post}) => {
  return (
    <View>
      <View style={{flexDirection:'row'}}>
        <Image source = {post.User.avatar} style={{width:50, height:50, borderRadius:25}} />
        <View style={{marginLeft:10}}>
          
          </View>
        <Text>{post.User.name}</Text>
        <Text >@{post.User.handle}</Text>
      </View>

      <Image source={post.image} style={{width:'100%', aspectRatio: 1}} />
    </View>
  )
}

export default Post