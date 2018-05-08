import React from 'react'
import ProjectListWrapper from '../containers/ProjectListWrapper'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

export default () => (
	<div> 
		<AppBar position='static'>
			<Toolbar>
				<Typography variant="title" color="inherit"> Projects </Typography>
			</Toolbar>
		</AppBar>
		<ProjectListWrapper />
	</div>
)