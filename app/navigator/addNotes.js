import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Form, Item, Picker, Button, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { postNotes, getNotes } from '../publics/redux/action/notes'

class addNotes extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            note: '',
            category: '',
        };
    }
    addpost = () => {
        console.log('dapat')
        const {title,note,category} = this.state
        if (this.state.title !== '' && this.state.note !== '' && this.state.category !== '') {
            let data = {
                'title' : title,
                'note' : note,
                'category_id' :category
            }
            this.props.dispatch(postNotes(data))
            this.props.navigation.pop()
            return true
        } else {
            Alert.alert("warning", 'data please insert data in from')
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ addpost: this.addpost })
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'ADD NOTE',
        headerTitleStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 16
        },
        headerRight: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ padding: 15, justifyContent: 'center', alignItems: 'center', }} transparent onPress={navigation.getParam('addpost')}>
                    <Thumbnail source={require('../assets/checked.png')}
                        style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }} />
                </TouchableOpacity>
            </View>
        )
    })
    render() {
        // console.log('data dapat category')
        // console.log(this.props.Category)
        return (
            <View
            style={{ marginHorizontal: 27, justifyContent: 'center', flex: 1, }}
            onBackPress={this.onBackButtonPressAndroid}>
                <View style={{ paddingTop: 30, flex: 1 }}>
                    <TextInput multiline placeholder='ADD TITLE' style={{ fontSize: 20 }} maxLength={50} onChangeText={(value) => this.setState({ title: value })} />
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput multiline placeholder='ADD DESCRIPTION' style={{ fontSize: 20 }} onChangeText={(value) => this.setState({ note: value })} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 18,color: 'black' }}>CATEGORY</Text>
                    <Item picker style={{width:200}}>
                        <Picker
                            style={{elevation:1, height: 45, paddingTop: 20, marginBottom: 165 }}
                            placeholderStyle={{ color: "#bfc6ea" }}
                            selectedValue={this.state.category}
                            onValueChange={(itemvalue) => this.setState({ category: itemvalue })}
                        >
                            <Picker.Item key='' label='OPTION' value='' />
                            {
                                this.props.Category.data.map(Item => (
                                    <Picker.Item key={Item.id} label={Item.name} value={Item.id} />
                                ))
                            }
                        </Picker>
                    </Item>
                </View>
            </View >
        )
    }
}
const mapStateToProps = state => {
    return {
        Category: state.Category,
        notes: state.notes
    }
}
export default connect(mapStateToProps)(addNotes)