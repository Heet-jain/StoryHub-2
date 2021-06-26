import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet, TextInput, Image, ToastAndroid} from 'react-native';


import db from '../config'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            storyText: '',
            title: ''
        }
    }

    submitStory = ()=> {
        db.colletion('stories').add({
            author: this.state.author,
            storyText: this.state.storyText,
            title :this.state.title
        });

        this.setState({
            author: '',
            storyText: '',
            title: '',
        });
    ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
}
    render(){
        return(
          <View styles={styles.container}>
          <View >
          <Text style={{textAling: 'center', fontSize: 30, backgroundColor: 'lightgreen'}}>StoryHub{''}</Text>
          </View>

          <View style={styles.inputView}>
           <TextInput
           style={styles.inputBox}
           placeholder="TItle of a Story"
             /> 

          </View>

          <View style={styles.inputView}>
           <TextInput
           style={styles.inputBox}
           placeholder="Author of story"
           /> 
          </View>

                
           <TextInput
            style={styles.inputBox}
            placeholder="Write your story here"
             />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={this.sumitStory}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>                
          </View>        
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center',
        backgroundColor: 'lightgreen'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin :10
    },
    buttonText:{
        fontSize: 15,
        textAling: 'center',
        marginTop: 10
    },
    inputView:{
        flexDirection: 'row',
        margin :20
    },
    inputBox:{
        width:200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    storyBox:{
        width:200,
        height: 200,
        borderWidht: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },

    scanButton: {
        backgroundColor: '#FBC02D',
        width : 50,
        borderWidht: 1.5,
        borderLeftWidth: 0
    },
    submitButton:{
        backgroundColor: '#FBC02D',
        width :200,
        height: 50,
    },

    submitButtonText:{

    }
})