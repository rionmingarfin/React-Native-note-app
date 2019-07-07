import React, { Component } from 'react';
import { TouchableOpacity, FlatList, View, Text, StyleSheet, ActivityIndicator, Alert, TextInput,RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import { getNotes, deleteNotes,getNotesPage} from '../publics/redux/action/notes'
import moment from 'moment'
import lodash from 'lodash'
console.logYellowBox=true;
class Card extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            refresh : false,
            page :0,
            isLoading : false,

        };
    };
    _onRefresh =() => {
        this.setState({
            refresh : true
        })
        this.props.dispatch(getNotes())
    }
    // fetchData = (search) => {
    //     // this.props.dispatch(getNotes(search)),
    // }
    
    updateSearch = (search) => {
        // console.log("data"+search)
            this.props.dispatch(getNotes(search))
        // const notesData = data.filter( data => data.title.search.toLowerCase().search(search.toLowerCase())
        // >=0)
        // if (notesData.lenght % 2 !=0) {
        //     notesData.push({id : `blank` ,empty : true})
        // }
    }
    handlePage = (data) => {
        // console.log('this.props.notes.pageNow')
        // console.log(this.props.notes.page.page)
        // console.log(this.props.notes.page.totalPage)
        if (this.props.notes.page.page < this.props.notes.page.totalPage) {
            setTimeout(()=>this.props.dispatch(getNotesPage(this.props.notes.page.page = this.props.notes.page.page + 1)),300)
        }else{
            
        }
        
}
    confirmation(id_notes) {
        Alert.alert(
            'delete', `Are you sure delete this item?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                     this.props.dispatch(deleteNotes(id_notes))
                    //  this.props.dispatch(getNotes(''))
                    }
                },
            ],
            { cancelable: true },
        );
    }
    // ListFoter = () =>{
    //     this.state.isLoading ?
    //     <ActivityIndicator size='large' color='#FF92A9'/>
    //     : null
    // }
    // componentWillMount() {
    //     this.props.dispatch(getNotes())
    //     // console.log('this.props.notes')
    //     // console.log(this.props.notes)
    // }

    _keyExtractor = (item, index) => item.id_notes+''
    FlatListItem = (item) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('editNotes',item)} style={{
            elevation: 5,
            width: 136,
            height: 138,  
            paddingHorizontal: 20,
            margin: 14,
            flex: 1,
            borderRadius: 5,
            // backgroundColor: color[item.item.id_category -1]
             backgroundColor: item.item.name_category == 'learn' ? '#2FC2DF' :
             item.item.name_category == 'learn' ? '#2FC245' :
             item.item.name_category == 'personal' ? '#C0EB6A' :
             item.item.name_category == 'daily' ? '#FAD06C' :
             item.item.name_category == 'Wishlist' ? '#FF92A9' : '#2F4356'
            
        }} onLongPress={()=>this.confirmation(item.item.id_notes)}>
        {/* {console.log(item)} */}
            <View>
                <Text style={styles.date}>{moment(item.item.notes_time).format('D MMM')}</Text>
                <Text style={styles.title}>{item.item.notes_title}</Text>
                {
                item.item.name_category == null ? 
                <Text>category notfound </Text> : 
                <Text style={styles.category}>{item.item.name_category}</Text>
                }
                <Text numberOfLines={4} style={styles.content}>{item.item.notes_note}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        // log redux store
        // console.log("this.props.notes:")
        // console.log(this.props.notes)
        return (
            <View  style={{height:600}}>
                <View style={styles.container}>
                    <TextInput placeholder="search..." style={styles.input}
                        onChangeText={lodash.debounce(this.updateSearch,300)}
                        value={this.state.search} />
                </View>
                {
                    this.props.notes.isLoading ?
                        <ActivityIndicator size='large' color='#FF92A9' /> :
                        this.props.notes.isError ?
                            <Text style={{fontSize:15,justifyContent:'center',alignItems: 'center',}}>data not found</Text> :
                            <View style={{height :450}}>
                            <FlatList
                                data={this.props.notes.data}
                                numColumns={2}
                                keyExtractor={this._keyExtractor}
                                renderItem={this.FlatListItem}
                                onEndReachedThreshold={0.1}
                                onEndReached={()=>this.handlePage()}
                                ListFooterComponent={this.ListFoter}
                                refreshControl={
                                    <RefreshControl
                                      refreshing={this.props.notes.isLoading}
                                      onRefresh={this._onRefresh}
                                    />
                                }
                                // style={{height:450}}
                                onEndReached= {this.handlePage}
                                onEndTreshold={0}
                                
                                // renderItem={({ item, index }) => {
                                    //     return (
                                        //         <FlatListItem navigation={this.props.navigation} item={item} index={index}>
                                        
                                        //         </FlatListItem>
                                        //     )
                                        // }}
                                        />
                                </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(Card)
 const color =  ['#2FC2DF','#C0EB6A','#FAD06C','#FF92A9']
const styles = StyleSheet.create({
    container: {

    },
    date: {
        paddingTop: 8,
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'right',
        color: '#FFFFFF'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
    category: {
        width: 72,
        height: 13,
        fontSize: 11,
        color: '#FFFFFF'
    },
    content: {
        fontWeight: 'bold',
        fontSize: 11,
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
    container: {
        marginBottom: 20,
        paddingTop: 18,
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        // alignItems: 'top',
        // paddingBottom: 50,
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        borderColor: '#E8E8E8',
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        elevation: 3
    },
})