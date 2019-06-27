import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer,createStackNavigator } from 'react-navigation'
import Home from './routes/Home';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Drawer from '../Component/drawer/drawerMenu'
import Personal from './routes/Personal';
import Work from './routes/Work';
import Wishlist from './routes/Wishlist';
import Category from './routes/Category';
import addNotes from './addNotes';
import editNotes from './editNotes';


const AppStack = createStackNavigator({
    home: { screen: Home},
    addNotes : {screen :addNotes},
    editNotes : {screen : editNotes}
  },{
      initialRouteName : 'home'
  }
)
  
const HomeScreen = createDrawerNavigator({
    Home: {
        screen: AppStack,
        navigationOptions: {
            drawerLabel: 'HOME',
            drawerIcon: ({ tintColor }) => {
                return <Icon name='home' size={25} style={{ color: tintColor }}></Icon>
            }
        }
    },
    pesonal: {
        screen: Personal,
    },
    Work: {
        screen: Work,
    },
    Wishlist: {
        screen: Wishlist,
    },
    // Category: {
    //     screen: Category,
    // },

}, {
        contentComponent: Drawer
    }
)

export default createAppContainer(HomeScreen);