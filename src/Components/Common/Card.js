import React from 'react';
import {View} from 'react-native';


const Card = (props) => {
    return (
        <View style = {Styles.constainerStyles}>
        {props.children}
        </View>
    );
};

const Styles = {
    constainerStyles : {
        borderWidth : 1,
        borderRadius :2,
        borderColor : '#DDD',
        borderBottomWidth : 0,
        elevation :1,
        marginLeft : 5,
        marginRight : 5,
        marginTop: 10,

    }
};

export {Card};