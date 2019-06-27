import React, { Component } from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Modal, TouchableHighlight, View, StyleSheet, ScrollView, Image, Text, TextInput,TouchableOpacity } from 'react-native'

class Drawer extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })

    }
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <Image source={require('../../assets/dwnld.jpeg')} style={{ width: 100, height: 100, justifyContent: 'center', borderRadius: 100 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', justifyContent: 'center' }}>Rion Ming arfin</Text>
                </View>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItems {...this.props} />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{ top: 150, left: 35, padding: 30, elevation: 30, right: 20, backgroundColor: '#fff', width: '80%' }}>
                            <TextInput placeholder='category items' style={{ borderBottomWidth: 2, borderColor: '#667867' }}></TextInput>
                            <TextInput placeholder='image url' style={{ borderBottomWidth: 2, borderColor: '#667867' }}></TextInput>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{ alignItems: 'flex-start' }}>
                                    <Text>add</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{ alignItems: 'flex-end' }}>
                                    <Text>cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }} style={{flex :1,flexDirection :'row'}}>
                    <Image source={require('../../assets/pluss.png')} style={{width :20,height :20,marginLeft :19}}/>
                        <Text style={{ paddingLeft: 25, fontSize: 15, fontWeight: 'bold', }}>add Category</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        )
    }

}

export default Drawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});