import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavbarIcon (props){
  const navigation = useNavigation();
    return(
            <TouchableOpacity onPress={props.onPress}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 26, height: 26, marginBottom: 4}}>
                <Image source={props.Icon} />
              </View>
              <Text style={{fontSize: 10, color: props.active? 'green' : 'grey' }}>{props.Title}</Text>
            </TouchableOpacity>
    )
}

export default NavbarIcon