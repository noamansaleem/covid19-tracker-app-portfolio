import React, { useContext } from 'react';
// import dateFormat from 'dateformat';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



//import Components
import { GlobalContext } from '../context/GlobalState';
import WaitingCircle from './WaitingCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1000,
        marginTop: 50,
        // backgroundColor: '#C5221F'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        fontWeight: 800,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20
        }
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    purple: {
        color: 'purple'
    },
    orange: {
        color: 'orange'
    },
    pink: {
        color: 'magenta'
    }
}));


export default function MainScreen() {
    const classes = useStyles();
    const customNames = ['RECOVERED', 'DEATHS', 'CONFIRMED', 'LAST CHECKED', 'LAST REPORTED'];
    let titleColor = [];
    // const customColors = ['green', 'red', 'purple', 'orange', 'pink'];
    const customColors2 = [`${classes.title} ${classes.green}`, `${classes.title} ${classes.red}`, `${classes.title} ${classes.purple}`, `${classes.title} ${classes.orange}`, `${classes.title} ${classes.pink}`];
    // const mymy = `${classes.title} ${classes.orange}`;

    const { globalData, isFetchingGlobal } = useContext(GlobalContext);
    const globalResults = globalData.data;
    console.log(globalResults);



    if (isFetchingGlobal) {
        return (
            <div className={classes.root}>
                <Grid justify="center" container spacing={3}>
                    {Object.keys(globalResults).map((val, index) => {
                        titleColor = customColors2[index];
                        return (
                            <Grid item xs={8} sm={6} key={index}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" gutterBottom className={`${titleColor} `}>
                                        {val.replace(/_/g, ' ').toUpperCase()}
                                    </Typography>
                                    <WaitingCircle />
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Grid justify="center" container spacing={3}>
                {Object.keys(globalResults).map((val, index) => {
                    titleColor = customColors2[index];
                    if (index < 5) {
                        {/* if (index === 3 || index === 4) {
                            return (
                                <Grid item xs={8} sm={6} key={index}>
                                    <Paper className={classes.paper}>

                                        <Typography variant="h5" gutterBottom className={`${titleColor} `}>
                                            {customNames[index]}
                                        </Typography>

                                        <Typography style={{ color: 'black', fontSize: 22 }} variant="subtitle2" gutterBottom>
                                            {globalResults[val]}
                                        </Typography>

                                    </Paper>
                                </Grid>
                            )
                        } */}

                        return (
                            <Grid item xs={8} sm={6} key={index}>
                                <Paper className={classes.paper}>

                                    <Typography variant="h5" gutterBottom className={`${titleColor} `}>
                                        {customNames[index]}
                                    </Typography>

                                    <Typography style={{ color: 'black', fontSize: 22 }} variant="subtitle2" gutterBottom>
                                        {globalResults[val]}
                                    </Typography>

                                </Paper>
                            </Grid>
                        )

                    }
                })}
            </Grid>
        </div >
    );
}
