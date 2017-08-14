import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection, Button, Card,TextInput} from './Common';



class LoginForm extends Component { 
   
   state = {text : ''};
    render(){
        return(
           <Card>
               <CardSection>
                <TextInput
                      label = 'Email'
                      value = {this.state.text}
                      onChangeText = {text => this.setState ({ text })}
                />
               </CardSection>

               <CardSection>
                  
               </CardSection>

               <CardSection>
                  <Button >
                    <Text >Login</Text>
                  </Button>
               </CardSection>
           </Card>
        
        );  
    }
}


export default LoginForm;