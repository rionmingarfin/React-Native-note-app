import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="search..." style={styles.input} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginBottom :20,
        flex: 1,
        paddingTop: 20,
        justifyContent :'center',
        width :'100%',
        marginTop :20,
        paddingHorizontal: 20,
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        borderColor: '#E8E8E8',
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        elevation: 3
    },
})