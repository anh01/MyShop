import { AsyncStorage } from 'react-native';

const saveCart = async (cartState) => {
    try {
        await AsyncStorage.setItem('@cart', JSON.stringify(cartState));
    } catch (error) {
        console.log(`Cannot set data: ${error}`);
    }
};

const getCart = async () => {
    try {
        const arr = await AsyncStorage.getItem('@cart');
        return arr || [];
    } catch (error) {
        return [];
    }
};

export default { saveCart, getCart };
