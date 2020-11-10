import React from 'react';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { loadHistory } from '../../store/actions';

const _HistoryChip = ({ item, setHistory }) => (<Chip clickable onClick={() => setHistory(item)} label={item.searchTerm} />);

const mapDispatchToProps = (dispatch) => ({
    setHistory: (payload) => dispatch(loadHistory(payload))
});

const HistoryChip = connect(null, mapDispatchToProps)(_HistoryChip);

export default HistoryChip;