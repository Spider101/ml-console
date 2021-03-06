import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { Link } from 'react-router-dom'

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Menu, { MenuItem } from 'material-ui/Menu'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class TrainJob extends Component {
    state = { anchorEl: null }

    handleOpen = evt => this.setState({ anchorEl: evt.currentTarget })

    handleClose = () => this.setState({ anchorEl: null })

    render(){
        const { 
            classes,
            data, 
            handleEdit, 
            handleDelete
        } =  this.props
        const { anchorEl } = this.state
        
        const cardMenu = (
            <Menu id="simple-menu" anchorEl={ anchorEl }
                open={ Boolean(anchorEl) } onClose={ this.handleClose } >
                <MenuItem onClick={ () => handleEdit(data.id) } > Edit </MenuItem>
                <MenuItem onClick={ () => handleDelete(data.id) } > Delete </MenuItem>
            </Menu>
        )

        const cardActions = (
            <IconButton onClick={ this.handleOpen }>
                <Icon>more_vert</Icon>
            </IconButton>
        )

        return (
            <Card className={classes.card}> 
                <CardHeader action={ cardActions } title={
                    <Typography variant='title'> { data.name }</Typography>
                }/>
                { cardMenu }
                <CardContent className={ classes.card_content }>
                    <ReactJson src={ data } name={ false }
                        enableClipboard={ false } displayDataTypes={ false } />
                </CardContent>
                <CardActions className={ classes.card_actions }>
                    <Button size='medium' color='primary' component={ Link }
                    to={ `/evaluations?jobId=${data.id}` }>Show Evaluations</Button>
                </CardActions>
            </Card> 
        )
	}
}

export default TrainJob
