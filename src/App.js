import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './Components/Common';
import LoginForm from './Components/LoginForm';


class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDw5alhkTFu7AykVqQLHg8oiXdQ0K7dfJY',
            authDomain: 'authwithrn.firebaseapp.com',
            databaseURL: 'https://authwithrn.firebaseio.com',
            projectId: 'authwithrn',
            storageBucket: 'authwithrn.appspot.com',
            messagingSenderId: '338153766089'
         }); 
    }
    render(){
        return(
            <View>
            <Header headerText = {'Login/SignUp'}/>
            
            <LoginForm />
            </View>
        );
    }
}

export default App;