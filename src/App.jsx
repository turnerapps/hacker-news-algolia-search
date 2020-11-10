import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from './components/SearchBox';
import MainContent from './components/MainContent';
import { getResults } from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App = () => {
    const classes = useStyles();
    const [results, setResults] = React.useState([]);

    const handleChange = async (value) => {
        const r = await getResults(value);
        console.log(r);
        setResults(r);
    };
    return (
        <>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" className={classes.title}>Hacker News Story Search</Typography>
                    <SearchBox handleChange={handleChange}/>
                </ToolBar>
            </AppBar>
            <MainContent results={results}/>
        </>
    );
};

export default App;
