import React, { Component } from 'react';
import { View ,Text,Image} from 'react-native';
import MenuButton from '../../Component/MenuButton';

export default class Category extends Component {
    static navigationOptions = {
        drawerLabel : 'add category',
        drawerIcon : ({tintColor}) => {
            return <Image source={require('../../assets/plus.jpeg')} style={{width : 20,height :20}}/>
        }
    }
    render() {
        return (
            <View>
            <MenuButton navigation={this.props.navigation}/>
                <Text>Category</Text>
            </View>
        );
    }
}
