import React from 'react'
import { TouchableOpacity ,Image, StyleSheet, View, Text } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../animations/FadeIn'


class FilmItem extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        longPress: false
      }
    }

    _displayFavoriteImage() {
      if(this.props.isFilmFavorite) {
        return (
          <Image
            style={styles.favorite_image}
            source={require('../image/ic_favorite.png')}
          />
        )
      }
    }

    _displayDate() {
      this.setState({
        longPress: !this.state.longPress
      })
    }

    _displayViewList() {
      const { film, displayDetailForFilm, isListView } = this.props
      if(isListView === true) {
        return (
          <TouchableOpacity 
            style={styles.main_container_view}
            onPress={() =>  displayDetailForFilm(film.id)}
            onLongPress={() => this._displayDate()}>
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Image
                    style={styles.image_view}
                    source={{uri: getImageFromApi(film.poster_path)}}
                  />
                  {this.state.longPress ? (
                    <Text style={styles.text_view}>Sorti le {film.release_date}</Text>
                  ) : (
                    <Text style={styles.text_view}>{film.title}</Text>
                  )}
                </View>
              </View>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity 
            style={styles.main_container}
            onPress={() => displayDetailForFilm(film.id)}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(film.poster_path)}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                {this._displayFavoriteImage()}
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
    }


    render() {
      console.log(this.props)
      console.log(this.props.isListView)
        return (
          <FadeIn>
            {this._displayViewList()}
          </FadeIn>
        )
      }
}
  
  const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#666666'
    },
    description_container: {
      flex: 7
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666'
    },
    date_container: {
      flex: 1
    },
    date_text: {
      textAlign: 'right',
      fontSize: 14
    },
    favorite_image: {
      width: 25,
      height: 25,
      marginRight: 5
    }, image_view: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
    }, text_view : {
      marginLeft: 15,
      marginTop: 15,
      fontWeight: 'bold',
      color: 'gray',
      fontSize: 15,
    }, main_container_view: {
      marginTop: 20,
      height: 100,
      flexDirection: 'row'
    }
  })
  
  export default FilmItem
