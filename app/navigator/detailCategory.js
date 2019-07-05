import React, { Component } from 'react';
import { View ,Text,Image} from 'react-native';

export default class detailCatgory extends Component {
    static navigationOptions = {
        drawerLabel : 'detail',
    }
    render() {
        return (
            <View>
                <Text>Wishlist</Text>
            </View>
        );
    }
}
