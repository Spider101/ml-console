import React from 'react'
import { NavLink } from 'react-router-dom'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'

import blue from 'material-ui/colors/blue'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    activeAnchor: {
        '& span, div h3': {
            color: blue[800]
        }
    }
})

const Sidebar = props => (
    <List component="nav">
    	<ListItem component={NavLink} exact to="/" 
    		activeClassName={ props.classes.activeAnchor } >
      		<ListItemIcon>
        		<Icon> inbox </Icon>
         	</ListItemIcon>
    	  	<ListItemText primary="Projects" />
    	</ListItem>
    	<ListItem component={NavLink} to='/train_jobs'
    		activeClassName={ props.classes.activeAnchor } >
      		<ListItemIcon>
        		<Icon> star </Icon>
      		</ListItemIcon>
      		<ListItemText primary="Training Jobs" />
    	</ListItem>
    </List>
)

export default withStyles(styles)(Sidebar)
