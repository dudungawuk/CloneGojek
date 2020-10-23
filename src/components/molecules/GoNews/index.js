import React from 'react';
import {View,Image,TouchableOpacity,Text} from 'react-native'

const GoNews = () => {
    return(
      <View>
        <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} />
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative' }}>
              <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{height: 170,width: '100%',borderRadius: 6}} />
              <View style={{position:'absolute', backgroundColor: 'black',width: '100%',height: '100%',opacity: 0.4,borderRadius: 6}} />
              <View style={{height: 15,width: 60,position:'absolute',top: 16,left: 16}}>
                <Image source={require('../../../assets/logo/white.png')} style={{width: undefined,height: undefined,resizeMode:'contain',flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 16,paddingBottom: 20}}>
              <Text style={{fontSize: 16,fontWeight: 'bold',color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: '500',color: '#7A7A7A',marginBottom: 11}}>Dimas Drajat selamatkan penalty,Timnas U-23 kalahkan Brunei</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#61A756',paddingHorizontal: 11,paddingVertical: 12,alignSelf: 'flex-end',borderRadius:4}}>
              <Text style={{color:'white', fontSize: 13,fontWeight: 'bold'}}>READ</Text>
            </TouchableOpacity>
          </View>
          
      </View>
    )
}

export default GoNews