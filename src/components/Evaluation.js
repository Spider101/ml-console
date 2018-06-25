import React from 'react'
import { Link } from 'react-router-dom'

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const Evaluation = ({ classes, data, handleDelete }) => {
        
    return (
        <Card className={classes.card}> 
            <CardHeader title={
                <Typography variant='title'> { data.metric_name }</Typography>
            }/>
            <CardContent className={ classes.card_content }>
                <Typography component='p'>
                    The model trained with job id &nbsp;
                    <code>{ data.job_id }</code> &nbsp;
                    achieved a performance of &nbsp;
                    <code>{ data.metric_value }</code> &nbsp;
                    when evaluated on this metric
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

export default Evaluation
