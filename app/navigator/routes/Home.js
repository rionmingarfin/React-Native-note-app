import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Picker, Modal, TouchableHighlight, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Card from '../../Component/card';
import PlusCategory from '../../Component/plusCategory';
import { Button, Thumbnail } from 'native-base';
import { getNotes, getNotesSort } from '../../publics/redux/action/notes'
import { getCategory } from '../../publics/redux/action/category'
import { connect } from 'react-redux';

var self
class Home extends Component {
    constructor() {
        super()
        self = this
        data = []
        this.state = {
            pickerSelection: 'default value',
            PickerDisplayed: false,
            modalVisible: false,
            desc :'desc',
            asc :'asc'
        }
    }
    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })
    }
    fetchData = (sort) => {
        this.props.dispatch(getNotes(sort))
    }
    DESCENDING = (sort) =>{
        console.log('descendfing')
        this.props.dispatch(getNotes('',sort))
    }
    ASCENDING = (sort) =>{
        console.log('ascending')
        this.props.dispatch(getNotes('',sort))
    }
    fetchDataCategory = () => {
        this.props.dispatch(getCategory())
    }
    deleteData = () => {
        this.props.dispatch(this.deleteNotes())
    }
    componentDidMount() {
        this.fetchData()
        this.fetchDataCategory()
    }
    search = (Newvalue) =>{
        this.updateSearch(Newvalue)
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'NOTE APP',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            fontSize :16
        },
        headerLeft: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity transparent onPress={() => navigation.toggleDrawer()}
                style={{padding:15,justifyContent:'center',alignItems: 'center'}}>
                    <Thumbnail source={require('../../assets/rion.jpg')}
                        style={{ height: 35, width: 35,justifyContent:'center',alignItems: 'center', }} />
                </TouchableOpacity>
            </View>
        ),
        headerRight: (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => self.setModalVisible(true)} style={{padding: 15,justifyContent:'center',alignItems: 'center'}}>
                    <Image source={require('../../assets/menu.jpeg')} style={{ width: 20, height: 20, padding: 10,margin :8,justifyContent:'center',alignItems: 'center', }} />
                </TouchableOpacity>
            </View>
        ),
    })
    render() {
        return (
            <React.Fragment>
                <View style={{ position: 'relative', flex: 1 }}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        style={{backgroundColor: '#FFFFFF',}}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,}}>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: '#FFFFFF', position: 'absolute', alignItems: 'center', top: 30, width: 127, height: 110, borderRadius: 5,right: 28,justifyContent:'center' }}>

                                <TouchableOpacity onPress={()=> {this.ASCENDING('asc')}} style={{paddingTop: 5,}}>
                                    <Text style={{fontSize:15,color:'#000000',}}>ASCENDING</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=> {this.DESCENDING('desc')}}style={{paddingTop: 5}}>
                                    <Text style={{fontSize:15,color:'#000000'}}>DESCENDING</Text>
                                </TouchableOpacity>
                                
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                                    
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                {/* <View>
                    <MenuDrawer navigation={this.props.navigation}/>
                </View> */}
                <Card navigation={this.props.navigation} />
                <View>
                    <PlusCategory navigation={this.props.navigation} 
                    />
                </View>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        Category: state.Category,
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Home)
