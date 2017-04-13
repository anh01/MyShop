import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import Search from './Search';
import TopBar from './TopBar';
import global from '../../global';

import homeIcon from '../../../media/appIcon/home.png';
import homeIcon0 from '../../../media/appIcon/home0.png';
import cartIcon from '../../../media/appIcon/cart.png';
import cartIcon0 from '../../../media/appIcon/cart0.png';
import searchIcon from '../../../media/appIcon/search.png';
import searchIcon0 from '../../../media/appIcon/search0.png';
import contactIcon from '../../../media/appIcon/contact.png';
import contactIcon0 from '../../../media/appIcon/contact0.png';

const { saveCart, getCart } = require('../../../api/saveCart');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 7,
        backgroundColor: 'transparent'
    },
    navIconStyle: {
        width: 25,
        height: 25
    },
    selectedStyle: { 
        color: '#2ABB9C', 
        fontWeight: 'bold',
        fontFamily: 'Avenir' 
    },
    titleStyle: {
        fontFamily: 'Avenir' 
    }
});


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 'home',
            arrCartItems: [],
            arrSearch: [] 
        };
        this.saveCart = this.saveCart.bind(this);
    }

    //component did mount adn goToHome function will be used in another component. 
    componentDidMount() {
        global.goToHome = this.goToHome.bind(this);
        global.goToSearch = this.goToSearch.bind(this);
        getCart()
        .then(arrCart => this.setState({ ...this.state, arrCartItems: arrCart }));
    }

    setArrSearch(arrSearch) {
        this.state = { ...this.state, arrSearch };
    }

    goToHome() {
        this.setState({ ...this.state, selectedTab: 'home' });
    }

    goToSearch() {
        this.setState({ ...this.state, selectedTab: 'search' });
    }
    
    saveCart() {
        saveCart(this.state.arrCartItems);
    }

    incrQuantityProduct(productId) {
        const item = this.state.arrCartItems.find(e => e.product.id === productId);
        item.quantity++;
        this.setState(this.state, this.saveCart);
    }

    decrQuantityProduct(productId) {
        const item = this.state.arrCartItems.find(e => e.product.id === productId);
        item.quantity--;
        this.setState(this.state, this.saveCart);
    }

    removeProduct(productId) {
        this.setState({ 
            ...this.state, 
            arrCartItems: this.state.arrCartItems.filter(item => item.product.id !== productId) 
        }, this.saveCart);
    }

    addProduct(product) {
        this.setState({ 
            ...this.state, 
            arrCartItems: [...this.state.arrCartItems, { product, quantity: 1 }]
        }, this.saveCart);
    }

    removeAll() {
        this.setState({ 
            ...this.state, 
            arrCartItems: []
        }, this.saveCart);
    }

    render() {
        const { body, container, navIconStyle } = styles;
        const { arrCartItems } = this.state;
        const controller = { 
            incr: this.incrQuantityProduct.bind(this),
            decr: this.decrQuantityProduct.bind(this),
            remove: this.removeProduct.bind(this),
            removeAll: this.removeAll.bind(this)
        };
        return (
            <View style={container}>
                <TopBar open={this.props.open} setArrSearch={this.setArrSearch.bind(this)} />
                <View style={body}>
                    <TabNavigator tabBarStyle={{ height: 55 }}>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            selected={this.state.selectedTab === 'home'}
                            renderIcon={() => <Image style={navIconStyle} source={homeIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={homeIcon} />}
                            title="Home"
                            onPress={() => this.setState({ ...this.state, selectedTab: 'home' })}
                        >
                            <Home addProduct={this.addProduct.bind(this)} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={cartIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={cartIcon} />}
                            selected={this.state.selectedTab === 'cart'}
                            title="Cart"
                            badgeText={this.state.arrCartItems.length}
                            onPress={() => this.setState({ ...this.state, selectedTab: 'cart' })}
                        >
                            <Cart data={arrCartItems} controller={controller} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={searchIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={searchIcon} />}
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            onPress={() => this.setState({ ...this.state, selectedTab: 'search' })}
                        >
                            <Search addProduct={this.addProduct.bind(this)} arrSearch={this.state.arrSearch} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            titleStyle={styles.titleStyle}
                            selectedTitleStyle={styles.selectedStyle}
                            renderIcon={() => <Image style={navIconStyle} source={contactIcon0} />}
                            renderSelectedIcon={() => <Image style={navIconStyle} source={contactIcon} />}
                            selected={this.state.selectedTab === 'contact'}
                            title="Contact"
                            onPress={() => this.setState({ ...this.state, selectedTab: 'contact' })}
                        >
                            <Contact />
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            </View>
        );
    }
}
