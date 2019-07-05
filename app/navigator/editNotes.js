import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Form, Item, Picker, Button, Thumbnail } from 'native-base';
import { connect } from 'react-redux'
import { updateNote ,getNotes} from '../publics/redux/action/notes'


class editNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_notes :this.props.navigation.state.params.item.id_notes,
            title: this.props.navigation.state.params.item.notes_title,
            note: this.props.navigation.state.params.item.notes_note,
            id_category : this.props.navigation.state.params.item.id_category
        };
    }
    editNotes = () => {
        console.log('data')
        console.log(this.state)
            this.props.dispatch(updateNote(this.state.id_notes, {
                title : this.state.title,
                note: this.state.note,
                category_id : this.state.id_category,

            }))
            this.props.dispatch(getNotes())
            this.props.navigation.navigate('home')
        
    }
    componentDidMount() {
        this.props.navigation.setParams({ editNotes: this.editNotes })
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'EDIT NOTE',
        headerTitleStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            textAlign: 'center',
            fontSize :16,
        },
        headerRight: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity transparent onPress={navigation.getParam('editNotes')} style={{padding: 15,justifyContent:'center',alignItems: 'center',}}>
                    <Thumbnail source={require('../assets/checked.png')}
                        style={{ height: 25, width: 25, right: 15 ,justifyContent:'center',alignItems: 'center',}} />
                </TouchableOpacity>
            </View>
        )
    })
    render() {
        console.log('dapat category')
        console.log(this.props.navigation.state.params)
        return (
            <View style={{ marginHorizontal: 27, justifyContent: 'center', flex: 1, }}>
                <View style={{ paddingTop: 30, flex: 1 }}>
                    <TextInput multiline
                        placeholder='ADD TITLE'
                        style={{ fontSize: 20 }}
                        maxLength={50}
                        onChangeText={(text) => this.setState({ title: text })}>{this.state.title}</TextInput>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput multiline
                        placeholder='ADD DESCRIPTION'
                        style={{ fontSize: 20 }}
                        onChangeText={(text) => this.setState({ note: text })}>{this.state.note}</TextInput>
                </View>
                <Form style={{ flex: 2 }}>
                    <Text style={{ fontSize: 18, color:'black'}}>CATEGORY</Text>
                    <Item picker style={{width:200}}>
                        <Picker
                            style={{elevation:1, height: 45, paddingTop: 20, marginBottom: 165}}
                            placeholderStyle={{ color: "#bfc6ea" }}
                            selectedValue={this.state.id_category}
                            onValueChange={(value) => this.setState({ id_category: value })}
                        >
                            {
                                this.props.Category.data.map(Item => (
                                    <Picker.Item key={Item.id} label={Item.name} value={Item.id} />
                                ))
                            }
                        </Picker>
                    </Item>
                </Form>

            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        Category: state.Category,
        notes: state.notes
    }
}
export default connect(mapStateToProps)(editNotes);