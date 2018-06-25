import React, { Component } from 'react'

import { CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import GridList, { GridListTile } from 'material-ui/GridList'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    root:{
        marginTop: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3
    },
    heading:{
        display: 'inline-block',
        borderBottom: '1px solid lightgray',
        paddingBottom: theme.spacing.unit / 2,
        marginLeft: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    }
})

class PredsGallery extends Component {
    componentWillMount(){
        this.props.fetchEvalPreds(this.props.match.params.evalId)
    }

    goBack(){
        this.props.history.goBack()
    }

    render(){
        const {
            itemPreds,
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
                        <Typography variant='headline' gutterBottom color='initial'
                            className={ classes.heading }> Model Predictions</Typography>
                            <GridList className={ classes.gridList } cols={ 2.5 }>
                                {itemPreds.map((img_url, _idx) => (
                                    <GridListTile key={_idx}>
                                        <img src={ img_url } alt={ _idx }/>
                                    </GridListTile>
                                ))}
                            </GridList>
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(styles)(PredsGallery)
