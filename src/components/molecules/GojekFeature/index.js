import React from 'react';
import {View,Image,Text} from 'react-native'
const GojekFeature =(props) => {
    return(
      <View style={{alignItems: 'center'}}>
        <View style={{width: 58,height: 58,borderWidth: 1,alignItems: 'center',justifyContent:'center', borderColor: '#EFEFEF',borderRadius:18}}>
          <Image source={props.img} />
        </View>
    <Text style={{fontSize:11,fontWeight:'bold',textAlign: 'center', marginTop: 6}}>{props.title}</Text>
        </View>
    )
  }

  export default GojekFeature