import React, {Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Footer from '../../organisms/Footer';

class Help extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text style={{fontSize: 20,fontWeight:'bold',justifyContent: 'center',alignItems:'center'}}>Header Help Mint</Text>
                <ScrollView>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                </View>
                </ScrollView>
                <Footer/>
            </View>
        );
    }
}

export default Help