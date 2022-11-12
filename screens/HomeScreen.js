import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from './NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full p-5`}>
        <View>
            <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
            }}
                source={{
                    uri:"data:image/png;base64,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"
                }}
            />
            <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:'blue'
    }
})