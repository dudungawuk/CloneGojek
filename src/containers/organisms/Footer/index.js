import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavBarIcon'
import { useNavigation } from '@react-navigation/native';

function Footer (){
  const navigation = useNavigation(); 
        return(
            <View
            style={{height: 54, backgroundColor: 'white', flexDirection: 'row'}}>
              <NavbarIcon Icon={require('../../../assets/icon/home-active.png')} Title="Home" active onPress={() => navigation.navigate('Home')} />
              <NavbarIcon Icon={require('../../../assets/icon/order.png')} Title="Orders" onPress={() => navigation.navigate('Orders')}/>
              <NavbarIcon Icon={require('../../../assets/icon/help.png')} Title="Help" onPress={() => navigation.navigate('Help')}/>
              <NavbarIcon Icon={require('../../../assets/icon/inbox.png')} Title="Inbox" onPress={() => navigation.navigate('Inbox')}/>
              <NavbarIcon Icon={require('../../../assets/icon/account.png')} Title="Account" onPress={() => navigation.navigate('Account')}/>
          </View>
        );
}

export default Footer