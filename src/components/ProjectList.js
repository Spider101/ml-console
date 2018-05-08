import React from 'react'
import PropTypes from 'prop-types'

import { LinearProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'

import { withStyles } from 'material-ui/styles'

import Project from './Project'

const styles = theme => ({
	add_btn: {
		bottom: '5%',
		right: '5%',
		position: 'fixed'
	}
})
const ProjectList = props => {
	const {
		classes,
		items, 
		handleClick
	} = props

	const project_list_template = (
			items.map((entry, _idx) => (
				<Grid key={_idx} item xs>
					<Project { ...props } project={entry}/>
				</Grid>
			))
	)
	return (
		<div>
			<Grid container spacing={0}>
				{items.length > 0 ? project_list_template : <LinearProgress />}
			</Grid>
			<Button variant='fab' color="primary" className={classes.add_btn}
				aria-label="add" onClick={ handleClick }>
				<AddIcon />
			</Button>
		</div>
	)
}

export default withStyles(styles)(ProjectList)