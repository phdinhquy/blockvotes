import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an acount</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapotalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => {}}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
                
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Term of service</Text>
                </TouchableOpacity>

                <Text style={styles.color_textPrivate}> and </Text>

                <TouchableOpacity onPress={() => alert('Privacy Policy Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            {Platform.OS == 'android' ? ( 
                <View>
                    <SocialButton 
                        buttonTitle="Sign Up with Facebook"
                        btnType="facebook"
                        color='#4867aa'
                        backgroundColor="#e6eaf4"
                        onPress={() => alert('Sign Up with Facebook Clicked!')}
                    />

                    <SocialButton 
                        buttonTitle="Sign Up with Google"
                        btnType="google"
                        color='#de4d41'
                        backgroundColor="#f5e7ea"
                        onPress={() => alert('Sign Up with Google Clicked!')}
                    />
                </View>
            ) : null}
            <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>
                    Have an account? Sign In
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    icons: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });