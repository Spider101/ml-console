import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '100%',
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		top:'30%',
		left: '30%',
	},
	form_btn: {
		margin: theme.spacing.unit
	}
})

const ProjectForm = props => {
	const {
		classes,
		form, 
		isValid, 
		handleChange, 
		heading,
		handleClear, 
		handleSubmit, 
	} = props
	
	const form_keys = Object.keys(form).filter(k => form[k].type !== 'hidden')
	
	return (
		<div className={ classes.paper }>
			<Typography align='center' 
				variant='title'>{ heading }</Typography>
			{form_keys.map((k, _idx) => (
				<TextField key={_idx} id={ k } label={ form[k].label } 
					className={ classes.textField } value={ form[k].value } 
					required={ form[k].required } type={ form[k].type }
					onChange={ handleChange }/>
			))}
			<Button onClick={ handleSubmit } color='primary'
				variant='raised' className={classes.form_btn} 
				disabled={ !isValid } > Submit </Button>
			<Button onClick={ handleClear }
				className={classes.form_btn}
				variant='raised'> Clear </Button>
		</div>
	)
}

export default withStyles(styles)(ProjectForm)
