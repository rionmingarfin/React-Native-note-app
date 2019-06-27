import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity ,Text} from 'react-native';
import { Form, Item, Picker, Button, Thumbnail } from 'native-base';

class editNotes extends Component {
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
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'edit notes',
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
                        style={{ height: 25, width: 25, right: 15 }} />
                </TouchableOpacity>
            </View>
        )
    })
    render() {
        return (
            <View style={{ marginHorizontal: 27, justifyContent: 'center', flex: 1, }}>
                <View style={{ paddingTop: 30, flex: 1 }}>
                    <TextInput multiline placeholder='ADD TITLE' style={{ fontSize: 24 }} maxLength={50}>{this.props.navigation.state.params.title}</TextInput>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput multiline placeholder='ADD DESCRIPTION' style={{ fontSize: 24 }} >{this.props.navigation.state.params.content}</TextInput>
                    {console.log(this.props.navigation)}
                </View>
                <Form style={{ flex: 2 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>CATEGORY</Text>
                    <Item picker>
                        <Picker
                            style={{ width: 150, elevation: 3, height: 45, paddingTop: 20 }}
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
export default editNotes;