import React, { Component } from 'react';
import { 
    View, StyleSheet, Navigator, StatusBar 
} from 'react-native';
import Main from './Main';
import Authentication from './Auth';

StatusBar.setHidden(true);

const renderScene = (route, navigator) => {
    if (route.name === 'MAIN') return <Main navigator={navigator} />;
    return <Authentication navigator={navigator} />;
};

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'MAIN' }}
                    renderScene={renderScene}
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
