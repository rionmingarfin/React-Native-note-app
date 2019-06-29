import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';

class MenuDrawer extends Component {
    constructor() {
        super()
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
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginLeft: 10, justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image source={require('../../assets/rion.jpg')} style={{ height: 35, width: 35,borderRadius:100 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.notes}>
                    <Text style={styles.textNotes}>app note</Text>
                </View>
                <View>
                    <Modal visible={this.state.PickerDisplayed} transparent={true} onRequestClose={() => console.log('picker')} animationType='slide'>
                        <View style={{ backgroundColor: '#C0EB6A', padding: 20, margin: 20, left: 20, right: 20,position: 'absolute', flex: 1, alignItems: 'center' }}>
                            {PickerValues.map((value, index) => {
                                return <TouchableHighlight key={index} onPress={() => this.setPickerValues(value.value)} style={{ paddingTop: 4, marginTop: 4, alignItems: 'center' }}>
                                    <Text>{value.title}</Text>
                                </TouchableHighlight>
                            })}
                        </View>
                    </Modal>
                </View>
                 <TouchableOpacity  onPress={() => this.togglePicker()} style={{ justifyContent: 'center' }}>
                    <Image source={require('../../assets/menu.jpeg')} style={{ width: 20, height: 20, paddingRight: 20, marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default MenuDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: 50, width: '100%',
        flexDirection: 'row',
        elevation: 5,
        position: "absolute",
        top: 0
    },
    notes: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textNotes: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
    }
})