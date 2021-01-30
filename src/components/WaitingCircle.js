import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // '& > * + *': {
        //     //     marginLeft: theme.spacing(2),

        // },
        circleStyle: {
            marginLeft: 400,
            // [theme.breakpoints.down('xs')]: {
            //     margin: 60,
            //     color: 'yellow'
            // },
            // [theme.breakpoints.up('sm')]: {
            //     marginLeft: 200,
            //     color: 'pink'
            // }
        }
    },
}));

export default function WaitingCircle() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <CircularProgress /> */}
            <CircularProgress className={classes.circleStyle} color="secondary" />
        </div>
    );
}
