import React from 'react'

const ProjectForm = ({ form, isValid, handleChange, heading,
					  handleCancel, handleSubmit, toggleForm }) => {
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
			<h3>{ heading }</h3>
			<div>
				{mappedFormFields}
				<button onClick={ handleSubmit } 
					disabled={ isValid ? "" : "disabled" } > 
					Submit 
				</button>
				<button onClick={ handleCancel }> Cancel </button>
				<p>{ isValid }</p>
			</div>
		</div>
	)
}

export default ProjectForm