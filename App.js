/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/config/router';

import GopayFeatureSection from './src/containers/organisms/GopayFeatureSection';
import GojekFeatureSection from './src/containers/organisms/GojekFeatureSection';
import MedsosConnect from './src/components/molecules/MedsosConnect';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoBanner from './src/components/molecules/Gobanner';
import Scrollable from './src/containers/organisms/Scrollable';
import Footer from './src/containers/organisms/Footer';


export default class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
}
