import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

const CoinItem = ({coin}) => {
    
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Image
                    style={styles.image}
                    source={{uri: coin.image}}
                />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.coinSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View style={styles.coinPrice}>
                <Text style={styles.coinPrice}>${coin.current_price}</Text>
                <Text style={[
                    styles.pricePercentage, 
                    coin.price_change_percentage_24h > 0
                        ? styles.priceUp
                        : styles.priceDown,
                ]}>${coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNames: {
        marginLeft: 10
    },
    coinName: {
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: '#ffffff'
    },
    coinSymbol:{
        color: '#434343',
        textTransform:'uppercase'
    },
    coinPrice: {
        color: '#FFFFFF',
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#FC4422'
    }
})

export default CoinItem