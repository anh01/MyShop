import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import CardDetail from './CartDetail';
import Checkout from './Checkout';
import ProductDetail from '../ProductDetail';



class Cart extends Component {
    renderScene(route, navigator) {
        const { data, controller } = this.props;
        if (route.name === 'CART_DETAIL') return <CardDetail navigator={navigator} data={data} controller={controller} />;
        if (route.name === 'PRODUCT_DETAIL') return <ProductDetail navigator={navigator} product={route.product} />;
        return <Checkout navigator={navigator} />;
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{ name: 'CART_DETAIL' }}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'transparent'
    }
});

export default Cart;
