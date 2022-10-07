import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import HomeFeed from './HomeFeed'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<HomeFeed item={item.home_feed}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});