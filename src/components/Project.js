import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import yellow from 'material-ui/colors/yellow'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	card: {
		margin: theme.spacing.unit
	},
	edit_btn:{
		color: theme.palette.getContrastText(yellow[300]),
		backgroundColor: yellow[300],
		'&:hover': {
		  backgroundColor: yellow[500]
		}
	},	
	delete_btn:{
		color: theme.palette.getContrastText(red[400]),
		backgroundColor: red[400],
		'&:hover': {
		  backgroundColor: red[600]
		}
	}
})

const Project = (props) => {
    const { 
		classes,
        project, 
        handleEdit, 
        handleDelete
    } =  props
    
    return (
        <Card className={classes.card}> 
        	<CardContent>
        		<Typography variant="headline" component="h2">
        			{project.name}
        		</Typography>
        		<Typography component="p"> {project.descr} </Typography>
        	</CardContent>
        	<CardActions>
        		<Button onClick={() => handleEdit(project.id) }
    				className={classes.edit_btn} 
              		variant='raised'> Edit </Button>
            	<Button onClick={() => handleDelete(project.id) } 
    				className={classes.delete_btn} 
					variant='raised'> Delete </Button>
    		</CardActions>
    	</Card> 
	)
}

export default withStyles(styles)(Project)