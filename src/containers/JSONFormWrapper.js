import React, { Component } from 'react'

import ReactJson from 'react-json-view'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        paddingTop: theme.spacing.unit,
        top: '30%',
        left: '35%',
        '& div':{
            maxHeight: theme.spacing.unit * 44,
            overflowY: 'auto'
        }
    },
    form_btn:{
        margin: theme.spacing.unit,
        float: 'right'
    }
})

class JSONFormWrapper extends Component{
    state = {
        json_data: {}
    }

    handleChange = props => {
        this.setState({ json_data: props.updated_src })
    }

    static getDerivedStateFromProps(nextProps, prevState){
        let nextState = {}
        if(Object.keys(prevState.json_data).length === 0){
            nextState = { 
                json_data: nextProps.data
            }
        }
        return nextState
    }

    handleSubmit = () => {
        // console.log(this.state.json_data, this.props.data)
    }

    handleClear = () => {
        this.setState({ json_data: this.props.data })
    }

    render(){
        const { classes } = this.props,
            { json_data } = this.state

        return (
            <div className={ classes.paper }>
                <Typography align='center' variant='headline' 
                    gutterBottom> Schema Editor</Typography>
                <ReactJson src={ json_data } name={ false } enableClipboard={ false } 
                    displayDataTypes={ false } theme={ 'solarized' } 
                    collapsed={ 1 } onAdd={ this.handleChange } 
                    onEdit={ this.handleChange } onDelete={ this.handleChange }/>
                <Button color='primary' variant='raised' className={ classes.form_btn }
                    onClick={ this.handleSubmit }> Submit </Button>
                <Button variant='raised' className={ classes.form_btn }
                    onClick={ this.handleClear }> Clear Changes </Button>
            </div>
       ) 
    }
}

export default withStyles(styles)(JSONFormWrapper)
