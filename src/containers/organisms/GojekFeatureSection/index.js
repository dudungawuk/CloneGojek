import React,{Component} from 'react';
import {View} from 'react-native';
import GojekFeature from '../../../components/molecules/GojekFeature'

class GojekFeatureSection extends Component{
    render(){
        return(
          <View style={{flexDirection: 'row',flexWrap: 'wrap',marginHorizontal: 16,marginTop: 18 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18}}>
                <GojekFeature title="GO-RIDE" img= {require('../../../assets/icon/go-ride.png')} />
                <GojekFeature title="GO-CAR" img= {require('../../../assets/icon/go-car.png')} />
                <GojekFeature title="GO-BLUEBIRD" img= {require('../../../assets/icon/go-bluebird.png')} />
                <GojekFeature title="GO-SEND" img= {require('../../../assets/icon/go-send.png')} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <GojekFeature title="GO-DEALS" img= {require('../../../assets/icon/go-deals.png')} />
                <GojekFeature title="GO-PULSA" img= {require('../../../assets/icon/go-pulsa.png')} />
                <GojekFeature title="GO-FOOD" img= {require('../../../assets/icon/go-food.png')} />
                <GojekFeature title="MORE" img= {require('../../../assets/icon/go-more.png')} />
          </View>
          <View style={{height: 17, backgroundColor: '#F2F2F4',marginTop: 20}} />
        </View>
        );
    }
}

export default GojekFeatureSection