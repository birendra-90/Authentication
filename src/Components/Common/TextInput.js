import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label ,value, onChangeText }) => {
    
    state = { text : '' };

    const {textInputStyle,labelStyle,viewStyle} = Styles;

    return(
        <View style = {viewStyle}>
            <Text style = {labelStyle}> {label}</Text>
            <TextInput 
            value = {value}
            onChangeText = {onChangeText}
            style = {textInputStyle}      
            />

        </View>
    );
};

const Styles = {
    textInputStyle : {
        fontSize : 20,
        color : '#212121',
        height : 20,
        width : 250,
        paddingRight : 5,
        paddingLeft : 5,
        lineHeight : 23,
        flex :2
    },
    labelStyle :{
            fontSize :18,
            paddingLeft :20,
            flex :1             
    },
    viewStyle : {
         height : 40,
         flex : 1,
         flexDirection : 'row',
         align : 'center'
    }

};


export  {TextInput};