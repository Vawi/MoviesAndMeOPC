import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image} from 'react-native'
import React from 'react'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import Favorites from '../components/Favorites'
import News from '../components/News'
import Views from '../components/Views'

const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Rechercher'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })

const ViewsStackNavigator = createStackNavigator({
  Views: {
    screen: Views,
    navigationOptions: {
      title: 'Mes films vus',
    },
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})
  
const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return <Image
            source={require('../image/ic_search.png')}
            style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../image/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    },
    Views: {
      screen: ViewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () =>  {
          return <Image
            source={require('../image/ic_check.png')}
            style={styles.icon}/> 
        }
      }
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions:{
        tabBarIcon: () => {
          return <Image
            source={require('../image/ic_fiber_new.png')}
            style={styles.icon}/> 
        }
      } 
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
)
  
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
  
export default createAppContainer(MoviesTabNavigator)