import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, Image, TouchableOpacity, ListView, RefreshControl 
} from 'react-native';
import ListItem from './ListItem';
import backIcon from '../../../../media/appIcon/backList.png';
import getList from '../../../../api/getList';
//navigator.push({ name: 'PRODUCT_DETAIL' })

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            refreshing: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            mang: []
        };
    }
    componentDidMount() {
        getList(3, 1)
        .then(arrProduct => this.setState({ ...this.state, dataSource: this.state.dataSource.cloneWithRows(arrProduct), mang: arrProduct }));
    }   

    onRefresh() {
        this.setState({
            ...this.state,
            refreshing: true    
        });
        console.log('REFRESHING!!!');
        getList(3, this.state.page + 1)
        .then(arrProduct => this.setState({ 
            ...this.state, 
            dataSource: this.state.dataSource.cloneWithRows(arrProduct.concat(this.state.mang)),
            mang: this.state.mang.concat(arrProduct),
            page: this.state.page + 1,
            refreshing: false
        }));
    }

    render() {
        const { navigator } = this.props;
        const { wrapper } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
                <View style={wrapper}>
                    <View 
                        style={{ height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                    >   
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigator.pop()}>
                            <Image source={backIcon} style={{ width: 30, height: 30, marginLeft: 10 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Avenir', fontSize: 20, margin: 20, color: '#C21C70' }}>MIDI DRESS</Text>
                        </View>
                        <View style={{ flex: 1 }}>

                        </View>
                    </View>
                    <ListView 
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                        dataSource={this.state.dataSource}
                        renderRow={rowData => <ListItem navigator={navigator} key={rowData.id} product={rowData} />}
                    />
                </View>
            </View>
        );
    }
}
//{this.state.arrProduct.map(e => <ListItem navigator={navigator} key={e.id} product={e} />)}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginBottom: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    }
});

export default ListProduct;
