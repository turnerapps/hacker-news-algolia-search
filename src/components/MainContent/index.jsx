import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ResultList from '../ResultList';
import Article from '../Article';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBarSpacer: theme.mixins.toolbar
}));

export const MainContent = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.appBarSpacer} />
            <Grid container direction="row">
                <Grid container direction="column" md={3}>
                    <ResultList />
                </Grid>
                <Grid container direction="column" md={9}>
                    <Article title="Article Title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque veritatis beatae voluptatibus nesciunt. Iste deserunt voluptatibus expedita, tempora accusantium veniam dicta nulla modi, in voluptatum, natus alias. Esse, ducimus.</Article>
                </Grid>
            </Grid>
        </>
    );
};

export default MainContent;