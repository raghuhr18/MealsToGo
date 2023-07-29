import React from "react";
import styled from "styled-components/native";

import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
backgroundColor: "white"
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 20px;
backgroundColor: "white"
`;

const Title = styled(Text)`
padding: 18px;
color: ${(props) => props.theme.colors.ui.error}
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = "Some Restaurant",
        icon,
        photos = [
            'https://source.unsplash.com/random/1920x1080/?wallpaper,landscape'
        ],
        address = "100 Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
            <Card elevation={5}>
                <Card.Cover key={name} source={{ uri: photos[0] }} />
                <Title>{name}</Title>
            </Card>
    )

    }