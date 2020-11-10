import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ResultList from '../../components/ResultList';
import HistoryChips from '../HistoryChips';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBarSpacer: theme.mixins.toolbar
}));

export const MainContent = ({history,setHistory}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.appBarSpacer} />
            <Container><HistoryChips /></Container>
            <Container><ResultList/></Container>
        </>
    );
};


export default MainContent;