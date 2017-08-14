import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label ,value, onChangeText,placeHolder,secureTextEntry,autoCapitalize,autoCorrect }) => {
    
    const {textInputStyle,labelStyle,viewStyle} = Styles;

    return(
        <View style = {viewStyle}>
            <Text style = {labelStyle}> {label}</Text>
            <TextInput 
            secureTextEntry = {secureTextEntry}
            autoCorrect = {autoCorrect}
            autoCapitalize = {autoCapitalize}
            placeholder = {placeHolder}
            value = {value}
            onChangeText = {onChangeText}
            style = {textInputStyle}      
            />

            </View>
    );
};

const Styles = {
    textInputStyle : {
        fontSize : 18,
        color : '#212121',
        paddingRight : 5,
        paddingLeft : 5,
        lineHeight : 23,
        flex :2
    },
    labelStyle :{
            fontSize :18,
            paddingLeft :20,
            flex :1,
            color : '#000000'             
    },
    viewStyle : {
         height : 40,
         width :200,
         flex : 1,
         flexDirection : 'row',
         alignItems : 'center'
    }

};


export  {Input};