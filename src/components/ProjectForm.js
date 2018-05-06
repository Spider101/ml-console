import React from 'react'

	const ProjectForm = ({ form, isHidden, isValid, handleChange, 
					  handleSubmit, toggleForm }) => {
	const mappedFormFields = Object.keys(form).map(
		(k, _idx) => (
			<input key={_idx}
                type={form[k].type} 
                name={k}
                onChange={handleChange}
                value={form[k].value} 
				placeholder={k}/>
		)
	)
	
	return (
		<div>
			<h3>Add Project</h3>
			<form onSubmit={ handleSubmit }>
				{mappedFormFields}
				<input type="submit" value="Submit" 
					disabled={ isValid ? "" : "disabled" } />
			</form>
		</div>
	)
}

export default ProjectForm