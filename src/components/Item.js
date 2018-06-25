import React from 'react'

import { withStyles } from 'material-ui/styles'

import Project from './Project'
import TrainJob from './TrainJob'
import Evaluation from './Evaluation'

const styles = theme => ({
	card: {
		marginRight: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3,
        width: 515
	},
    card_actions: {
        padding: [[8, 4]]
    },
    card_content: {
        paddingTop: 0,
        paddingBottom: 0
    }
})

const switchComponent = props => {
    switch(props.type){
        case 'project':
            return <Project { ...props } />
        case 'train_job':
            return <TrainJob { ...props } />
        case 'evaluation':
            return <Evaluation { ...props } />
        default:
            return <Project { ...props } />
    }
}

export default withStyles(styles)(props =>  ( switchComponent(props) ))
