import React from 'react'
import styles from '../styles/CoinItem.style'
import { 
    View,
    Text,
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

export default CoinItem