import { StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'

import users from '../Asset BundleFans/assets/data/users'
import UserCard from '../src/components/UserCard'



export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        {/* <UserCard  user ={users[0]} /> */}
        {/* <UserCard  user = {users[1]} />
        <UserCard  user = {users[2]} /> */}
        <FlatList 
            data={users}
            renderItem={({item}) => <UserCard user={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        paddingTop: 75
    },
})