import React, { Component } from 'react';
import { TouchableOpacity, FlatList, View, Text, StyleSheet } from 'react-native'
import DumyData from '../Component/dumy/dumy'

class FlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('editNotes',this.props.item)} style={{
                elevation: 5,
                width: 136,
                height: 138,
                paddingHorizontal: 20,
                margin: 14,
                flex: 1,
                backgroundColor: (this.props.item.category.toLowerCase() == 'learn') ? '#2FC2DF' :
                (this.props.item.category.toLowerCase() == 'work') ? '#FAD06C' :
                    (this.props.item.category.toLowerCase() == 'personal') ? '#C0EB6A' :
                        (this.props.item.category.toLowerCase() == 'wishlist') ? '#FF92A9' : '#FAD06C', borderRadius: 5,
            }}>
                <View>
                    <Text style={styles.date}>{this.props.item.date}</Text>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.category}>{this.props.item.category}</Text>
                    <Text style={styles.content}>{this.props.item.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class Card extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={DumyData}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem navigation={this.props.navigation} item={item} index={index}>

                            </FlatListItem>
                        )
                    }}
                />
            </View>
        )
    }
}
// const color =this.props.item.category = 'personal' ? '#2FC2DF' : '#C0EB6A'

// const color =this.item.category = 'nike' ['#2FC2DF','#C0EB6A','#FAD06C','#FF92A9']
// const color =this.props.item.category ='personal' ? '#C0EB6A' : '#FAD06C'
const styles = StyleSheet.create({
    container: {

    },
    date: {
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 10,
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
        fontSize: 10,
        color: '#FFFFFF'
    },
    content: {
        fontWeight: 'bold',
        fontSize: 10,
        fontStyle: 'normal',
        color: '#FFFFFF'
    }
})