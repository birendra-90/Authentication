import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress,children}) => {

    const {buttonStyling,textStyling} = Style;

    return (
        <TouchableOpacity onPress = { onPress } style = {buttonStyling}>
            {children}
        </TouchableOpacity>    
    );
};

const Style = {
    buttonStyling : {
        flex: 1,
        alignItems : 'center',
        alignSelf : 'stretch',
        borderRadius : 5,
        borderWidth : 1,
        height : 30,
        justifyContent : 'space-around',
        backgroundColor : '#2196F3'
    },
    textStyling : {
        alignSelf : 'center',
        color : '#ECEFF1',
        fontSize : 16,
        fontWeight : '600',
        padding : 10
    }
};
export {Button}; 
