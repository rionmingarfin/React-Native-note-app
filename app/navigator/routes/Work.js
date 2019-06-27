import React, { Component } from 'react';
import { View ,Text,Image} from 'react-native';
import MenuButton from '../../Component/MenuButton';

export default class Work extends Component {
    static navigationOptions = {
        drawerLabel : 'work',
        drawerIcon : ({tintColor}) => {
            return <Image source={require('../../assets/work.jpeg')} style={{width : 20,height :20}}/>
        }
    }
    render() {
        return (
            <View>
            <MenuButton navigation={this.props.navigation}/>
                <Text>Work</Text>
            </View>
        );
    }
}
