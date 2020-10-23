import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature'
import {useNavigation} from '@react-navigation/native';

function GopayFeatureSection (){
    const navigation = useNavigation(); 
          return(
        <View>
            <View style={{marginHorizontal: 17, marginTop: 8}}>
                <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#2c5fb8',
                    borderTopLeftRadius: 4,
                    justifyContent: 'space-between',
                    borderTopRightRadius: 4,
                    padding: 14,
                }}>
                <Image source={require('../../../assets/icon/gopay.png')} style={{}} />
                <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                    Rp 50.000
                </Text>
                </View>
            </View>
            <View
                style={{
                backgroundColor: '#2f65bd',
                marginHorizontal: 17,
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                }}>
                <GopayFeature onPress={() => navigation.navigate('scanQRcode')} title="Pay" img={require('../../../assets/icon/pay.png')} />
                <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')} />
                <GopayFeature title="Top up" img={require('../../../assets/icon/topup.png')} />
                <GopayFeature title="More" img={require('../../../assets/icon/more.png')} />
            </View>
          </View>
        );
    }

export default GopayFeatureSection