import React, {Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Footer from '../../organisms/Footer';

class Orders extends Component{
    render(){
        return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text style={{fontSize: 20,fontWeight:'bold',justifyContent: 'center',alignItems:'center'}}>Header Orders Mint</Text>
            <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
            </View>
            </ScrollView>
            <Footer/>
        </View>
        );
    }
}

export default Orders