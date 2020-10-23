import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GoBanner (){
const navigation = useNavigation(); 
    return(
        <View>
      <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} />
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative' }}>
              <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{height: 170,width: '100%',borderRadius: 6}} />
              <View style={{position:'absolute', backgroundColor: 'black',width: '100%',height: '100%',opacity: 0.4,borderRadius: 6}} />
              <View style={{height: 15,width: 60,position:'absolute',top: 16,left: 16}}>
              <Image source={require('../../../assets/logo/white.png')} style={{width: undefined,height: undefined,resizeMode:'contain',flex: 1}} />
              </View>
              <View style={{position: 'absolute', bottom: 0,left: 0, width: '100%', paddingHorizontal: 16,flexDirection :'row', paddingBottom: 16}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold',color: 'white',marginBottom: 8}}>Free GO-FOOD Voucher</Text>
                  <Text style={{fontSize: 11, fontWeight: '400',color: 'white'}}>Quick,before they run out</Text>
                </View>
                <View style={{flex: 1}}>
                <TouchableOpacity style={{backgroundColor: '#61A756',paddingHorizontal: 11,paddingVertical: 12,alignSelf: 'flex-end',borderRadius:4}}  onPress={() => navigation.navigate('GetVoucherScreen')} >
                  <Text style={{color:'white', fontSize: 13,fontWeight: 'bold'}}>GET VOUCHER</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
          
    )
}

export default GoBanner