import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class ProductDetail extends Component {
    render() {
        const { wrapper, main } = styles;
        return (
            <View style={wrapper}>
                <View style={main}>
                    <ActivityIndicator animating />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        padding: 10
    },
    main: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        justifyContent: 'center'
    }
});
