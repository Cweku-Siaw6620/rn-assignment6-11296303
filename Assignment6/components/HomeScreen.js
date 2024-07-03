import React, { useState } from 'react';
import { View, Text,StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1 }}>
    
    <View style={styles.header}>
    <Image source={require('../assets/Menu.png')} style={{ width: 24, height: 24 }} />
    <Image source={require('../assets/Logo.png')} style={{ width: 230, height: 90 ,alignSelf: 'center' }} />
    
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity>
    <Image source={require('../assets/Search.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('../assets/shoppingBag.png')} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    columnGap:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40
  },
});
