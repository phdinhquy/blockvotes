import React from "react";
import { SafeAreaView, ScrollView, View, Text, Button, StyleSheet} from "react-native";

const AppStack = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={styles.container}>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default AppStack;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#DCF8C6",
        margin: 10,
        borderBottomLeftRadius: Platform.OS === 'ios' ? 40 : 10,
        borderBottomRightRadius: Platform.OS === 'ios' ? 40 : 10,
        borderTopLeftRadius: Platform.OS === 'ios' ? 10 : 10,
        borderTopRightRadius: Platform.OS === 'ios' ? 10 : 10,

    },

});