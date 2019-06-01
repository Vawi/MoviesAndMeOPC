// Components/Search.js
import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

class Search extends React.Component {
    render() {
        return (
          <View style={{ marginTop: 20, backgroundColor: 'red' }}>
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
            <Button style={styles.textinput} title='Rechercher'  onPress={() => {}}/>
          </View>
        )
      }
}



export default Search