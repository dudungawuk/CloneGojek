import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';

const GopayFeature =(props) => {
    return(
        <View style={{flex: 1, alignItems: 'center'}}>
           <TouchableOpacity onPress={props.onPress}>
            <Image source={props.img} />
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
          </TouchableOpacity>
        </View>
    )
  }

  export default GopayFeature