import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';

const MedsosConnect = () => {
    return(
      <View>
      <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} />
        <View style={{paddingHorizontal: 16,paddingTop: 16}}>
      <View style={{height: 15,width: 60,marginLeft:-4}}>
        <Image source={require('../../../assets/logo/gojek.png')} style={{width: undefined,height: undefined,resizeMode:'contain',flex: 1}} />
      </View>
      <Text style={{fontSize: 17,fontWeight: 'bold',color: '#1C1C1C',marginTop: 15,marginBottom: 20}}>Complete your profile</Text>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../../../assets/dummy/facebook-connect.png')}></Image>
        <View style={{marginLeft:16,flex:1}}>
          <Text style={{fontSize: 15,fontWeight: 'bold',color: '#4A4A4A'}}>Connect With Facebook</Text>
          <Text style={{fontSize: 15,fontWeight: 'normal',color: '#4A4A4A',width:'70%',marginBottom: 16}}>Log in faster without verification code</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor: '#61A756',paddingHorizontal: 11,paddingVertical: 12,alignSelf: 'flex-end',borderRadius:4}}>
            <Text style={{color:'white', fontSize: 13,fontWeight: 'bold'}}>CONNECT</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
}
    
export default MedsosConnect