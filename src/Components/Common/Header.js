
//Import Statements
import React from 'react';
import {Text , View} from 'react-native';


//Making the copmponent

const Header = (props) => {
    //const {textStyle , viewStyles} =styles;
 
    return ( 
    <View style = {styles.viewStyles} >
        <Text style = {styles.textStyle}>{ props.headerText} </Text>
    </View> 
    );
};
//Adding styles to the Header
const styles = {
    viewStyles: {
        backgroundColor: '#F8F8F8',
        justifyContent : 'center',
        alignItems: 'center',
        height: 50,
        padding:10,
        elevation :2,
        position : 'relative'
    },
    textStyle: {
        fontSize :20,
        color: '#000000'
        
        
    }
};
//Make it available to other parts of the apps
export {Header};