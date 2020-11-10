export const actions = {
    SetSearchTerm: "SET_SEARCH_TERM",
    BeginSearch: "BEGIN_SEARCH",
    SearchSuccess: "SEARCH_SUCCESS",
    SearchFailure: "SEARCH_FAILURE",
    LoadHistoryItem: "LOAD_HISTORY_ITEM"
};

export const setSearchTerm = (searchTerm) => {
    return (dispatch) => {
        dispatch({ type: actions.BeginSearch });

        fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`)
            .then(
                response => response.json(),
                error => dispatch({ type: actions.SearchFailure, payload: { searchTerm, results: error } })
            ).then(
                json => dispatch({ type: actions.SearchSuccess, payload: { results: json.hits, searchTerm } }),
                error => dispatch({ type: actions.SearchFailure, payload: { searchTerm, results: error } })
            );
    }
}

export const loadHistory = (historyItem) => dispatch => {
    dispatch({ type: actions.LoadHistoryItem, payload: historyItem })
};

export default actions;