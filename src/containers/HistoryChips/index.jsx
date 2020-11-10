import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import HistoryChip from '../../components/HistoryChip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const _HistoryChips = ({ historyItems }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {historyItems.map((historyItem, i) => (<HistoryChip key={i} item={historyItem} />))}
        </div>
    );
}

const mapStateToProps = (state) => ({ historyItems: state.history });

const HistoryChips = connect(mapStateToProps, null)(_HistoryChips);

export default HistoryChips;
