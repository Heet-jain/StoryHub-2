import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native"
import { createAppContainer } from 'react-navigation';
import { createBottomTabContainer} from 'react-navigation';

import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
    render(){
        return(
            <AppContainer />
        )
    
    }
}

const TabNavigator = createBottomTabContainer({
    WriteStory: {screen : WriteStoryScreen },
    ReadStory: {screen: ReadStoryScreen},
},
{
    defaultNavigationOptions: ({navigation})=>({
        TabBarIcon: ()=>{
            const routeName = navigation.state.routeName;
            //console.log(routeName)
            if(routeName === "ReadStory"){
                return(
                    <Image
                    source={require("./assets/write.png")}
                    style={{width: 40, height:40}}
                    />
                )
            }
            else if(routeName === "ReadStory"){
                return(
                    <Image
                    source={require("./assets/read.png")}
                    />
                )
            }
        }
    })

}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alingItems: 'center',
        justifyContent: 'center'
    }
})