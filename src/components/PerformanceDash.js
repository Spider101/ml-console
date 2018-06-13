import React, { Component } from 'react'

import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Card, { CardHeader, CardContent } from 'material-ui/Card' 
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

import { withStyles } from 'material-ui/styles'

import LinearChart from './LinearChart'

const styles = theme => ({
    root:{
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3
    },
    heading:{
        display: 'inline-block',
        borderBottom: '1px solid lightgray',
        paddingBottom: theme.spacing.unit / 2,
        marginLeft: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    card: {
        marginRight: theme.spacing.unit * 3,
        width: 525
    },
    card_content: {
        paddingTop: 0,
        paddingBottom: 0,
        '& canvas':{
            borderTop: '1px solid lightgray'
        }
    },
    item:{
        flexGrow: 0
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
})

class PerformanceDash extends Component {
    componentWillMount(){
        this.props.fetchEval(this.props.match.params.evalId)
    }

    goBack(){
        this.props.history.goBack()
    }

    render(){
        const {
            itemLogs,
            classes,
            loading
        } = this.props

        const loadingBar = <CircularProgress className={ classes.progress }
                            size={100} thickness={2}/>

        return (
            <div className={ classes.root }>
                { 
                    ( loading && loadingBar ) ||
                    <div>
                        <IconButton color='primary' onClick={ () => this.goBack() }>
                            <Icon>arrow_back</Icon>
                        </IconButton>
                        <Typography variant='headline' gutterBottom color='textSecondary'
                            className={ classes.heading }> Model Performance</Typography>
                        <Grid container spacing={0}>
                            <Grid className={ classes.item } item xs>
                                <Card className={ classes.card }>
                                    <CardHeader title={ 
                                        <Typography color='textSecondary' variant='title'>
                                            Loss Visualization</Typography> 
                                    }/>
                                    <CardContent className={ classes.card_content }>
                                        <LinearChart rawData={ itemLogs } />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
	
}

export default withStyles(styles)(PerformanceDash)
