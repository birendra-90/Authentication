import React from 'react';
import {View , ActivityIndicator} from 'react-native';

 const Spinner = ( { size } ) => {
     return(
         <View style = {Styles.spinnerStyling}>
            <ActivityIndicator size = {size  || 'large'}>

            </ActivityIndicator>
         </View>
     );
};

const Styles = {
    spinnerStyling : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'
    }
};

 export {Spinner};