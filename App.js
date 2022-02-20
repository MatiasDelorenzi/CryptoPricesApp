import React, { useEffect, useState } from 'react'
import CoinItem from './components/CoinItem'
import styles from './styles/App.style'
import { 
  View,
  Text,
  FlatList,
  TextInput,
  StatusBar
} from 'react-native'

const App = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState([])
    const [refreshing, setRefreshing] = useState(false)
      
    const loadCoins = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      setCoins(data);
    };

    useEffect( () => {
      loadCoins();
    }, []);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#141414"/>
        <View style={styles.header} >
          <Text style={styles.title}>CryptoMarket</Text>
          <TextInput style={styles.searchInput}
            placeholder='Search a coin'
            placeholderTextColor="#858585"
            onChangeText={text => setSearch(text.toLowerCase())}
          />
        </View>
        <FlatList
          style={styles.list}
          data={coins.filter(
            (coin) => 
              coin.name.toLowerCase().includes(search) || 
              coin.symbol.toLowerCase().includes(search)
          )}
          renderItem={({ item }) => {
            return <CoinItem coin={item}/>
          }}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true)
            await loadCoins()
            setRefreshing(false)
          }}
        />
      </View>
    )
}

export default App;