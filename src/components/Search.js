// Components/Search.js
import React from 'react'
import { ActivityIndicator,Text, View, TextInput, Button, StyleSheet, FlatList } from 'react-native'
import films from '../helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
      super(props)
      this.searchedText = ""
      this.page = 0
      this.totalPages = 0
      this.state = {
        films: [],
        isLoading: false
      }
    }

    _displayDetailForFilm = (idFilm) => {
      console.log("Display film with id : " + idFilm)
      this.props.navigation.navigate("FilmDetail", { idFilm: idFilm})
    }

    _displayLoading() {
      if(this.state.isLoading) {
        return(
          <View style={styles.loading_container}>
            <ActivityIndicator size='large'/>
          </View>
        )
      }
    }

    _searchFilms() {
      this.page = 0
      this.totalPages = 0
      this.setState({
        films: []
      }, () => {
        this._loadFilms()
      })
    }

    _searchTextInputChanged(text) {
      this.searchedText = text
    }

    _loadFilms() {
      if(this.searchedText.length > 0) {
        this.setState({
          isLoading: true
        })
        getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({ 
            films: [ ...this.state.films, ...data.results] ,
            isLoading: false
          })
        });
      }
    }

    render() {
        return (
          <View style={styles.main_container}>
            <TextInput 
              style={styles.textinput} 
              placeholder='Titre du film'
              onChangeText={(text) => this._searchTextInputChanged(text)}
              onSubmitEditing={() => this._searchFilms()}
            />
            <Button title='Rechercher' onPress={() => this._loadFilms()}/>
            <FlatList
              data={this.state.films}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <FilmItem film={item} displayDetailForFilm=
              {this._displayDetailForFilm}/>}
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if(this.page < this.totalPages) {
                  this._loadFilms()
                }
              }}
            />
            {this._displayLoading()}
          </View>
        )
      }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default Search