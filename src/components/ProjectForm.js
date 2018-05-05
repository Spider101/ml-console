import React from 'react'

const ProjectForm = ({ formState, isHidden, isValid, handleChange, 
					  handleSubmit, toggleForm }) => {
	const mappedFormFields = Object.keys(formState).map(
		(k, _idx) => (
			<input key={_idx}
                type={formState[k].type} 
                name={k}
                onChange={handleChange}
                value={formState[k].value} 
				placeholder={k}/>
		)
	)
	
	const form_template = (
		<div>
			<h3>Add Project</h3>
			<form onSubmit={ handleSubmit }>
				{mappedFormFields}
				<input type="submit" value="Submit" 
					disabled={ isValid ? "" : "disabled" } />
			</form>
		</div>
	)
	return (
		<div>
			<button onClick={ toggleForm }>
				{ isHidden ? 'Close Form' : 'Add Form'}
			</button>
			{ isHidden && form_template }
		</div>
	)
}

export default ProjectForm