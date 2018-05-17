import React, { Component } from 'react'

import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Menu, { MenuItem } from 'material-ui/Menu'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	card: {
		margin: theme.spacing.unit * 2,
        width: 400
	},
    card_content: {
        paddingTop: 0
    }
})

class Project extends Component {
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
                <CardHeader title={ data.name } action={ cardActions } />
                { cardMenu }
                <CardContent>
                    <Typography> { data.descr } </Typography>
                </CardContent>
            </Card> 
        )
	}
}

export default withStyles(styles)(Project)
