import React from "react";

import { Text, Image, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Done = ({ ... props}) =>(
    <TouchableOpacity
        style={{marginHorizontal: 10}}
        {... props}
    >
        <Text style={{fontSize:16, color:'#000000'}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#FFFF66',
                    image: <Image source={require('../assets/images/onboarding-img1.png')} />,
                    title: 'Accessibility',
                    subtitle: 'Casting votes online increases accessibility to a distributed member base and is proven to provide a higher participation rate',
                },
                {
                    backgroundColor: '#FFFF66',
                    image: <Image source={require('../assets/images/onboarding-img2.png')} />,
                    title: 'Eases vote management',
                    subtitle: 'Online voting system eases the tedious voting process and gives pleasant experience for both voters and administrators',
                },
                {
                    backgroundColor: '#FFFF66',
                    image: <Image source={require('../assets/images/onboarding-img3.png')} />,
                    title: 'Saves you time and money',
                    subtitle: 'Traditional paper voting needs to supply paper ballots, postage and printing. Plus it requires extra manpower for counting votes through show of hands',
                },
            ]}
        />
    );
};

export default OnboardingScreen;