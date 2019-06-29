import React, { Component } from 'react';
import { StyleSheet, View, Picker, Modal, TouchableHighlight, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Search from '../../Component/Search';
import Card from '../../Component/card';
import PlusCategory from '../../Component/plusCategory';
import { Button, Thumbnail } from 'native-base';
import MenuDrawer from '../../Component/dumy/MenuDrawer';

var self
class Home extends Component {
    constructor() {
        super()
        self = this
        this.state = {
            pickerSelection: 'default value',
            PickerDisplayed: false,

        }
    }
    togglePicker() {
        this.setState({
            PickerDisplayed: !this.state.PickerDisplayed
        })
    }
    setPickerValues(newValue) {
        this.setState({
            pickerSelection: newValue
        })
        this.togglePicker();
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'note app',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            flexGrow: 1,
        },
        headerLeft: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button transparent onPress={() => navigation.toggleDrawer()}>
                    <Thumbnail source={require('../../assets/rion.jpg')}
                        style={{ height: 35, width: 35, left: 15 }} />
                </Button>
            </View>
        ),
        headerRight: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => self.togglePicker()}>
                    <Image source={require('../../assets/menu.jpeg')} style={{ width: 20, height: 20, paddingRight: 20, marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        ),
    })
    render() {
        const PickerValues = [
            {
                title: 'ASCENDING',
                value: 'ASCENDING'
            }, {
                title: 'DESCENDING',
                value: 'DESCENDING'
            }
        ]
        return (
            <React.Fragment>
                <View style={{position :'relative',flex :1}}>
                    <Modal visible={this.state.PickerDisplayed} transparent={true} onRequestClose={() => console.log('picker')}>
                        <View style={{ backgroundColor: '#FFFFFF',position: 'absolute',alignItems: 'center',top :30,width :127,height :110,borderBottomRightRadius: 5,borderTopLeftRadius: 5,alignSelf :'flex-end',elevation :7,right :28}}>
                            {PickerValues.map((value, index) => {
                                return <TouchableHighlight key={index} onPress={() => this.setPickerValues(value.value)} style={{ paddingTop: 4, marginTop: 4, alignItems: 'center' }}>
                                    <Text style={{fontSize :18}}>{value.title}</Text>
                                </TouchableHighlight>
                            })}
                                <TouchableOpacity onPress={() => self.togglePicker()}>
                                    <Text style={{fontSize :18}}>Cancel</Text>
                                </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                {/* <View>
                    <MenuDrawer navigation={this.props.navigation}/>
                </View> */}
                <View>
                    <Search />
                </View>
                <ScrollView>
                    <Card navigation={this.props.navigation}/>
                </ScrollView>
                <View>
                    <PlusCategory navigation={this.props.navigation} />
                </View>
            </React.Fragment>

        );
    }
}
export default Home
