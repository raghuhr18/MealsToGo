import React from "react";
import styled from "styled-components/native"
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight }px` };
`;

const SearchContainer = styled(View)`
  padding: 16px;
  backgroundColor: "#ade6e6";
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  backgroundColor: "#72bcd4";
`;


export const RestaurantsScreen = () => (
    <SafeArea>
      <SearchContainer >
        <Searchbar placeholder="Type Here..." style={ styles.searchBar } />
      </SearchContainer>
      <RestaurantListContainer >
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
)

const styles = StyleSheet.create({
    searchBar: {
      borderRadius: 5,
    }
  });