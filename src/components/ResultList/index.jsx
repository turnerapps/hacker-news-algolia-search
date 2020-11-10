import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const _ResultList = ({results}) => {
    const classes = useStyles();

    return results !== undefined && results.length && results.length > 0 ? (
        <List className={classes.root}>
            {results.map((r,i,a) => (<Link key={i} href={r.url}><ListItem alignItems="flex-start">
                <ListItemText
                    primary={r.title}
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {r.author}
              </Typography>
                            {r.date}
                        </>
                    }
                />
            </ListItem></Link>))}
        </List>
    ) : (<>No Results Found; please enter a search term in the box above.</>);
}

const mapStateToProps = (state) => ({
    results: state.results
});

const ResultList = connect(mapStateToProps, null)(_ResultList);

export default ResultList;