import React, { Component } from 'react'
import { DrawerItems, SafeAreaView ,DrawerActions} from 'react-navigation';
import { Alert,Modal, TouchableHighlight, View, StyleSheet, ScrollView, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { getCategory, addCategory,deleteCategory } from '../../publics/redux/action/category'
import { connect } from 'react-redux'
import { getNotes ,getNotesByCategory} from '../../publics/redux/action/notes';

class Drawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            name: '',
            image: ''
        }
    }

    handleSubmit = (data) => {
            this.props.dispatch(addCategory(data))
            this.setState({
                modalVisible : false
            })
    }
    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })

    }
    fetchDataNotes = () => {
        this.props.dispatch(getCategory())
    }
    detailCategory = (id) =>{
        this.props.dispatch(getNotesByCategory(id))
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
        // this.props.navigation.navigate('detailCategory',this.props.notes.id)
    }
    componentDidMount() {
        this.fetchDataNotes();
    }
    confirmation = (id) => {
        Alert.alert(
            'Hapus', `Are you sure delete this item?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                     this.props.dispatch(deleteCategory(id)),
                     this.props.dispatch(getNotes(''))
                     this.props.dispatch(getCategory(''))
                    }
                },
            ],
            { cancelable: true },
        );
    }
    renderFlatlist = (item) => (
        // console.log('dapat itmnya'),
        // console.log(item),
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, paddingTop: 8, color: '#000000' }}
        onPress={() => this.detailCategory(item.id)} 
        onLongPress={()=>this.confirmation(item.id)}>
            <Image source={require('../../assets/pluss.png')} style={{ width: 20, height: 20, marginLeft: 19 }} />
            <Text style={{ paddingLeft: 23, fontSize: 17, color:'#000000' }}>{item.name}</Text>
        </TouchableOpacity>
    )
    render() {
        // console.log('this.propsnotes')
        // console.log(this.props.notes)
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <Image source={require('../../assets/rion.jpg')} style={{ width: 100, height: 100, justifyContent: 'center', borderRadius: 100 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, color:'#000000', justifyContent: 'center' }}>Rion Ming arfin</Text>
                </View>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItems {...this.props} />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                            </TouchableOpacity>
                            <View style={{ backgroundColor: '#fff', width: '70%', height: 200, padding: 20 }}>
                                <TextInput placeholder='category items' style={styles.input} onChangeText={(text) => this.setState({ name: text })} />

                                <TextInput placeholder='image url' style={styles.input} onChangeText={(text) => this.setState({ image: text })} />
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                                    <TouchableHighlight onPress={() => this.handleSubmit({ name: this.state.name, image: this.state.image })} style={{ alignItems: 'flex-start',padding :15 }}>
                                        <Text>add</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{ alignItems: 'flex-end',padding :15 }}>
                                        <Text>cancel</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View>
                        <FlatList
                            data={this.props.Category.data}
                            numColumns={1}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => this.renderFlatlist(item)}
                        />
                    </View>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }} style={{ flex: 1, flexDirection: 'row', paddingTop: 8, }}>
                        <Image source={require('../../assets/pluss.png')} style={{ width: 20, height: 20, marginLeft: 19 }} />
                        <Text style={{ paddingLeft: 23, fontSize: 17, color:'#000000'}}>add Category</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        )
    }

}
const mapStateTopProps = state => {
    return {
        Category: state.Category,
        notes : state.notes
    }
}
export default connect(mapStateTopProps)(Drawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#667867'
    }
});