import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import GopayFeatureSection from '../../organisms/GopayFeatureSection';
import GojekFeatureSection from '../../organisms/GojekFeatureSection';
import MedsosConnect from '../../../components/molecules/MedsosConnect';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoBanner from '../../../components/molecules/Gobanner';
import Scrollable from '../../organisms/Scrollable';
import Footer from '../../organisms/Footer';

function HomeScreen ({ navigation }){
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <SearchFeature/>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                <GopayFeatureSection/>
                    <GojekFeatureSection />
                    <GoNews />
                        <MedsosConnect />
                    <GoBanner />
                <Scrollable />
                </View>
            </ScrollView>
            <Footer/>
        </View>
    );
}

export default HomeScreen