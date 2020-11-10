import actions from './actions';
const initialState = {
    searchTerm: "",
    history: [],
    results: [],
    searching: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SetSearchTerm:
            return {...state, searchTerm: action.payload };
        case actions.BeginSearch:
            return {...state, searching: true };
        case actions.SearchSuccess:
            return {...state, results: action.payload.results, history: [...state.history, { searchTerm: action.payload.searchTerm, results: action.payload.results }], searching: false };
        case actions.SearchFailure:
            return {...state, results: [], history: [...state.history, { searchTerm: action.payload.searchTerm, results: [] }], searching: false };
        case actions.LoadHistoryItem:
            return {...state, searchTerm: action.payload.searchTerm, results: action.payload.results };
        default:
            return state;
    }
};

export default reducer;