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
    },
    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

// const tileData = [
//     {
//         img: 'images/Queens-Gambit.jpg',
//         title: 'Queens-Gambit',
//         author: 'jill111',
//         cols: 2,
//         featured: true,
//     },
//     {
//         img: 'images/spy.jpg',
//         title: 'The Spy',
//         author: 'director90',
//     },
//     {
//         img: 'images/suits.jpg',
//         title: 'Suits',
//         author: 'Danson67',
//     },
//     {
//         img: 'images/Vikings.jpeg',
//         title: 'Vikings',
//         author: 'fancycrave1',
//         featured: true,
//     }
// ];
export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom>
                Home
            </Typography>

            {/* <GridList cellHeight={200} spacing={1}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList> */}
        </div>
    );
}