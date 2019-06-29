import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class PlusCategory extends Component {
    render() {
        return (
            <TouchableOpacity style={{flex :1,position: 'absolute', backgroundColor: '#FFFCFC', elevation: 4, borderRadius: 100, height: 57, width: 58, right: 15, bottom: 50,alignItems : 'center',justifyContent :'center'}} onPress={() => this.props.navigation.navigate('addNotes')}>
                <View style={{alignItems : 'center',justifyContent :'center'}}>
                    <Image source={require('../assets/plusCategory.png')} style={{ width: 20, height: 23,alignItems : 'center',justifyContent :'center'}} />
                </View>
            </TouchableOpacity>
        )
    }
}