import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import MovieIcon from '@material-ui/icons/Movie';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import React from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem >
        <ListItem button component={Link} to="/NewContent">
            <ListItemIcon>
                <FiberNewIcon />
            </ListItemIcon>
            <ListItemText primary="New Content" />
        </ListItem>
        <ListItem button component={Link} to="/Movies">
            <ListItemIcon>
                <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button component={Link} to="/LiveChannels">
            <ListItemIcon>
                <PersonalVideoIcon />
            </ListItemIcon>
            <ListItemText primary="Live Channels" />
        </ListItem>
        <ListItem button component={Link} to="/WatchList">
            <ListItemIcon>
                <PlaylistAddIcon />
            </ListItemIcon>
            <ListItemText primary="Watchlist" />
        </ListItem>
    </div >
);