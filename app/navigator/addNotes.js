import React, { Component } from 'react'
import { View, TextInput,TouchableOpacity,Text} from 'react-native';
import { Form, Item, Picker,Button,Thumbnail} from 'native-base';

export default class addNotes extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'add notes',
        headerTitleStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            textAlign: 'center'
        },
        headerRight: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity transparent>
                    <Thumbnail source={require('../assets/checked.png')}
                        style={{ height: 25, width: 23, right: 15 }} />
                </TouchableOpacity>
            </View>
        )
    })
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <View style={{ marginHorizontal: 27, justifyContent: 'center', flex: 1, }}>
                <View style={{ paddingTop: 30, flex: 1 }}>
                    <TextInput multiline placeholder='ADD TITLE' style={{ fontSize: 24 }} maxLength={50}></TextInput>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput multiline placeholder='ADD DESCRIPTION' style={{ fontSize: 24 }}></TextInput>
                </View>
                <Form style={{flex :2}}>
                    <Text style={{fontSize :18,fontWeight :'bold'}}>CATEGORY</Text>
                    <Item picker>
                        <Picker
                            style={{paddingTop : 20 }}
                            placeholderStyle={{ color: "#bfc6ea" }}
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="OPTIONS" value="0" />
                            <Picker.Item label="WORK" value="1" />
                            <Picker.Item label="WISHLIST" value="2" />
                            <Picker.Item label="PERSONAL" value="3" />
                            <Picker.Item label="LEARN" value="4" />
                        </Picker>
                    </Item>
                </Form>

            </View>
        )
    }
}
