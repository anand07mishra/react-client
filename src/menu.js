import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieIcon from '@material-ui/icons/Movie';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FiberNewIcon />
            </ListItemIcon>
            <ListItemText primary="New Content" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MovieIcon />
            </ListItemIcon>
            <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Series" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PersonalVideoIcon />
            </ListItemIcon>
            <ListItemText primary="Live Channels" />
        </ListItem>
    </div>

);