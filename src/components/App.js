import React, { Component } from 'react';
import { 
    View, StyleSheet, Navigator, StatusBar 
} from 'react-native';
import Main from './Main';
import Authentication from './Auth';
import UserArea from './UserArea/UserArea';

StatusBar.setHidden(true);

const renderScene = (route, navigator) => {
    if (route.name === 'MAIN') return <Main navigator={navigator} />;
    if (route.name === 'USER') return <UserArea />;
    return <Authentication navigator={navigator} />;
};

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'MAIN' }}
                    renderScene={renderScene}
                    configureScene={(route) => {
                        if (route.name === 'USER') return Navigator.SceneConfigs.FloatFromLeft;
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
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
