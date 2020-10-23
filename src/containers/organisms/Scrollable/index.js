import React, {Component} from 'react';
import {View,Image,Text,ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class Scrollable extends Component {
    render () {
        return (
          <View>
          <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} />
            <View style={{height: 15,width: 60,marginLeft:16,marginBottom:12}}>
              <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined,height: undefined,resizeMode:'contain',flex: 1}} />
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginBottom:16,marginHorizontal:16}}>
              <Text style={{color:'#1C1C1C',fontSize:17,fontWeight:'bold'}}>Nearby Restaurant</Text>
              <Text style={{color:'#61A756',fontSize:17,fontWeight:'bold'}}>See All</Text>
            </View>
            <ScrollView horizontal style={{paddingLeft:16,marginBottom:30}}>
              <ScrollableItem Image={require('../../../assets/dummy/go-food-kfc.jpg')} Title= 'KFC Rita' />
              <ScrollableItem Image={require('../../../assets/dummy/go-food-gm.jpg')} Title= 'Bakmi Nyemek' />
              <ScrollableItem Image={require('../../../assets/dummy/go-food-banka.jpg')} Title=  'Martabak Asin'/>
              <ScrollableItem Image={require('../../../assets/dummy/go-food-orins.jpg')} Title= 'Martabak Manis'/>
              <ScrollableItem Image={require('../../../assets/dummy/go-food-pak-boss.jpg')} Title= 'Ayam Bakar'/>
            </ScrollView>
          </View>
        );
    }
}

export default Scrollable