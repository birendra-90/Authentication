import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Toast from 'react-native-simple-toast';
import { CardSection, Button, Card, Input, Spinner } from './Common';



class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {

        const { email, password } = this.state;

        this.setState({ error: '', loading: true });


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((err) => {
                console.log(err);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(console.log(err),
                    this.onLoginError.bind(this));
            });
    }

    onLoginError() {
        this.setState({
            error: "Authentication Failed",
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''

        });
    }

    renderButton() {

        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        else return <Button onPress={this.onButtonPress.bind(this)}>
            Login/SignUp
                    </Button>
    }


    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            secureTextEntry={false}
                            placeHolder="Enter valid email address"
                            autoCorrect={false}
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Password"
                            placeHolder="Enter your password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <Text style={Styles.errorMessage}>
                        {this.state.error}
                    </Text>

                    <CardSection >
                        {this.renderButton()}
                    </CardSection>
                </Card>

            </View>
        );
    }
}

const Styles = {
    errorMessage: {
        color: '#F44336',
        fontSize: 18,
        alignContent: 'center'//,
        //fontAlignment : 'center'

    }
};
export default LoginForm;