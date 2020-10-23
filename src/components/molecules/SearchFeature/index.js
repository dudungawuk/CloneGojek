import React from 'react';
import {View,Image,TextInput} from 'react-native'

const Searchfeature =(props)=> {
    return (
        
        <View
          style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 25,
                height: 40,
                paddingLeft: 45,
                paddingRight: 15,
                fontSize: 14,
                marginRight: 18,
              }}
              placeholder={'What do you whant to eat?'}
            />
            <Image
              source={require('../../../assets/icon/search.png')}
              style={{position: 'absolute', top: 6, left: 15}}
            />
          </View>
          <View
            style={{justifyContent: 'center', width: 35, alignItems: 'center'}}>
            <Image source={require('../../../assets/icon/promo.png')} />
          </View>
        </View>
    )
}

export default Searchfeature