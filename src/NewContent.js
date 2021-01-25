import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function NewContent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom>
                New Content
            </Typography>
        </div >
    );
}
