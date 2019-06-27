import React, { Component } from 'react';
import { View ,Text,Image} from 'react-native';
import MenuButton from '../../Component/MenuButton';

export default class Wishlist extends Component {
    static navigationOptions = {
        drawerLabel : 'Wishlist',
        drawerIcon : ({tintColor}) => {
            return <Image source={require('../../assets/Wishlist.jpeg')} style={{width : 20,height :20}}/>
        }
    }
    render() {
        return (
            <View>
            <MenuButton navigation={this.props.navigation}/>
                <Text>Wishlist</Text>
            </View>
        );
    }
}
