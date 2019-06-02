const initialState = { favoritesFilm: [] }

function toggleFavorite(state, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = sate.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filtre((item, index) => index !== favoriteFilmIndex)
                }
            } else {
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
            return nextState || state 
        default:
            return state
    }
}

export default toggleFavorite