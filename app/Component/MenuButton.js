import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

class MenuButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginLeft: 10, justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/left.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Image source={require('../assets/menu.jpeg')} style={{ width: 20, height: 20, paddingRight: 20, marginRight: 20 }} />
                </TouchableOpacity> */}
            </View>
        );
    }
}
export default MenuButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: 50, width: '100%',
        flexDirection: 'row',
        elevation: 5,
        position: "absolute",
        top: 0
    },
    notes: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textNotes: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
    }
})