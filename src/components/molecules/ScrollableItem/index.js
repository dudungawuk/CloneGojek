import React from 'react';
import {View,Image,Text} from 'react-native';

const ScrollableItem =(props) => {
    return(
        <View>
            <View style={{height: 150,width: 150,marginRight:16}}>
                <Image source={props.Image} style={{borderRadius:10,width: undefined,height: undefined,resizeMode:'cover',flex: 1}} />
            </View>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#1C1C1C',marginTop:12}}>{props.Title}</Text>
        </View>
    )
}

export default ScrollableItem