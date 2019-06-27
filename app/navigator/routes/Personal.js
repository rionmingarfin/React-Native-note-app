import React, { Component } from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native'
import MenuButton from '../../Component/MenuButton';
// import Icon from 'react-native-vector-icons/dist/Entypo'
class Personal extends Component {
     static navigationOptions = {
        drawerLabel : 'Personal',
        drawerIcon : ({tintColor}) => {
            return <Image source={require('../../assets/personal.jpeg')} style={{width : 20,height :20}}/>
        }
    }
    render() {
        return (
            <View>
            <MenuButton navigation={this.props.navigation}/>
                <Text style={style.Text}>
                lorem 
                </Text>
            </View>
        )
    }
}
export default Personal;

const style = StyleSheet.create({
    Text: {                                                                                                                   justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
    }
})