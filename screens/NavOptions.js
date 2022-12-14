import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'; 

const data =[
    {
        id:"123",
        title:"Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title:"Get a ride",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
];

const NavOptions = () => {
  return (
    <>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    horizontal
    renderItem ={({item}) =>(
        <TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
            <View>
                <Image
                style={{ width:120, height: 120, resizeMode:'contain'}}
                source={{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold ml-5`}>{item.title}</Text>
                <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-5`}
                name='arrowright'
                color='white'
                type='antdesign'
                />
                
            </View>
            
        </TouchableOpacity>
    )}
    />
    <View>
        <Text>HELLO</Text>
    </View>
    </>
  );
};

export default NavOptions

const styles = StyleSheet.create({})