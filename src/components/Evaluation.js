import React from 'react'
import { Link } from 'react-router-dom'

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	card: {
		margin: theme.spacing.unit * 2,
        width: 400
	},
    card_content: {
        paddingTop: 0,
        paddingBottom: 0
    },
    card_actions: {
        padding: [[8, 0]]
    }
})

const Evaluation = ({ classes, data, handleDelete }) => {
        
    return (
        <Card className={classes.card}> 
            <CardHeader title={ data.metric_name } />
            <CardContent className={ classes.card_content }>
                <Typography component='p'>
                    The model trained with job id { data.job_id } achieved a performance of { data.metric_value } when evaluated on this metric
                </Typography>
            </CardContent>
            <CardActions className={ classes.card_actions }>
                <Button color='primary' size='medium'
                    component={ Link } to={ `/evaluations/${data.id}/performance` }>
                    Analyze Logs</Button>
                <Button color='primary' size='medium'
                    component={ Link } to={ `/evaluations/${data.id}/predictions` }>
                    View Predictions</Button>
                <Button color='primary' size='medium'
                    onClick={ () => handleDelete(data.id) }>
                    Delete</Button>
            </CardActions>
        </Card> 
    )
}

export default withStyles(styles)(Evaluation)
