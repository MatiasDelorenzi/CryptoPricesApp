import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141414',
      alignItems: 'center',
      flex: 1
    },
    title: {
      color: '#ffffff',
      marginTop: 30,
      fontSize: 20,
    },
    list: {
      width: '90%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 15
    },
    searchInput:{
      color: '#ffffff',
      borderBottomColor: '#4657ce',
      borderBottomWidth: 1,
      width: '40%',
      textAlign: 'center'
    }
})

export default styles