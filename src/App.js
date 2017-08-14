import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';



class App extends Component {
    state = { loggedIn: false, headerName: 'Login' };


    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDw5alhkTFu7AykVqQLHg8oiXdQ0K7dfJY',
            authDomain: 'authwithrn.firebaseapp.com',
            databaseURL: 'https://authwithrn.firebaseio.com',
            projectId: 'authwithrn',
            storageBucket: 'authwithrn.appspot.com',
            messagingSenderId: '338153766089'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true, headerName: 'Welcome' });
            }
            else {
                this.setState({ loggedIn: false, headerName: 'Get Authenticated!' });
            }
        });
    }

    onLogOut() {

    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:

                return (
                    <View style={{ flexDirection: 'row', }}>
                        <Button onPress={()=> firebase.auth().signOut() } >
                            <Text> Logout </Text>
                        </Button>
                    </View>
                );

            case false:

                return (
                    <View style={{ flexDirection: 'column' }}>

                        <LoginForm />
                    </View>);

            default:

                return (<View style={{ flexDirection: 'column' }}>
                    <Spinner size="large" />
                </View>
                );

        }

    }
    render() {
        return (
            <View>
                <Header headerText={this.state.headerName} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;