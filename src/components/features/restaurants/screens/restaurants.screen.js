import React from "react";

import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Type Here..." style={ styles.searchBar } />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
      backgroundColor: "#ade6e6",
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "#72bcd4",
    },
    searchBar: {
      borderRadius: 5,
    }
  });