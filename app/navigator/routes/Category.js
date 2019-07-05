import React, { Component } from 'react';
import { View ,Text,Image,FlatList} from 'react-native';
import moment from 'moment'
import {getNotes} from '../../publics/redux/action/notes'
import {connect} from 'react-redux'
class Category extends Component {
    static navigationOptions = {
        headerTitle: 'add notes',
        headerTitleStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            textAlign: 'center'
        },
    }
    render() {
        return (
            <View>
                <FlatList
                data ={this.props.Category.data}/>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        Category: state.notes
    }
}
export default connect(mapStateToProps)(Category)