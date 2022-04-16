import AsyncStorage from '@react-native-async-storage/async-storage';
export const addtoCart = async(item) => {
    const STORAGE_KEY = '@save_age';
    let cart = [];
    try {
        if (await AsyncStorage.getItem(STORAGE_KEY)) {
            cart = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
        }
        cart.push({
            ...item,
            count: 1
        });
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        alert('Data successfully saved');

    } catch (e) {
        alert('Failed to save the data to the storage' + e)
    }
}
export const showCart = async() => {
    const STORAGE_KEY = '@save_age';
    try {
        const cartItems = await AsyncStorage.getItem(STORAGE_KEY)
        if (cartItems !== null) {
            return JSON.parse(cartItems);
        }
    } catch (e) {
        alert('Failed to fetch the data from storage')
    }
}
export const clearOnboarding = async() => {
    try {
        await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
        console.log("Error @clearOnboarding", error);
    }
}
export const clearCart = async() => {
    const STORAGE_KEY = '@save_age';
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        alert('Storage successfully cleared!')

    } catch (error) {
        console.log("Error STORAGE_KEY", error);
    }
}