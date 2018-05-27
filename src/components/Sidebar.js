import React from 'react'
import { NavLink } from 'react-router-dom'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'

import blue from 'material-ui/colors/blue'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    icon: {
        width: '1.25em',
        marginRight: theme.spacing.unit
    },
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
      		<ListItemIcon className={ props.classes.icon }>
        		<Icon className={ 'fas fa-cubes' }> </Icon>
         	</ListItemIcon>
    	  	<ListItemText primary="Projects" />
    	</ListItem>
    	<ListItem component={NavLink} to='/train_jobs'
    		activeClassName={ props.classes.activeAnchor } >
      		<ListItemIcon className={ props.classes.icon }>
        		<Icon className={ 'fas fa-flask' }> </Icon>
      		</ListItemIcon>
      		<ListItemText primary="Training Jobs" />
    	</ListItem>
    	<ListItem component={NavLink} to='/evaluations'
    		activeClassName={ props.classes.activeAnchor } >
      		<ListItemIcon className={ props.classes.icon }>
        		<Icon className={ 'fas fa-chart-bar' }> </Icon>
      		</ListItemIcon>
      		<ListItemText primary="Evaluations" />
    	</ListItem>
    </List>
)

export default withStyles(styles)(Sidebar)
