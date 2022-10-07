import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.art_image}
    source={{uri: item.art_image}}
    />
<Text style={styles.art_caption}>{item.art_caption}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'art_image': {
        'height': '60vw',
        'marginTop': 5,
        'marginHorizontal': 10,
        'flex': 1,
        'borderRadius': 10
    },
    'art_caption': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'paddingBottom': 10
    }
});