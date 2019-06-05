import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList';
import { connect } from 'react-redux'


class Views extends React.Component {

}

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    return {
        viewsFilm: state.toggleFavorite.viewsFilm
    }
}

export default connect(mapStateToProps)(Views)