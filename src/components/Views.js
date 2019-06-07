import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmList from './FilmList';
import { connect } from 'react-redux'


class Views extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.viewsFilm}
                    navigation={this.props.navigation}
                    viewList={true}
                    favoriteList={false}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        viewsFilm: state.toggleView.viewsFilm
    }
}

export default connect(mapStateToProps)(Views)