import React from 'react'
import PropTypes from 'prop-types'

const ProjectList = ({ items, buttonText, handleEdit, 
					  handleDelete, handleClick  }) => {
	const mappedItems = items.map((item, _idx) => (
							<li key={_idx}>
								<h3>
									<a href={item.gh_url}>{item.name}</a>
								</h3>
								<p>{item.descr}</p>
								<button onClick={() => handleEdit(item.id)}>
									Edit
								</button>	
								<button onClick={() => handleDelete(item.id)}>
									Delete
								</button>
							</li>
						))
	const project_list_template = (
		<div>
			<h3> Projects </h3>
			<ul> { mappedItems } </ul>
		</div>
	)
	const loading_template = <h3>Loading Projects ..</h3>
	const template = (
		<div>
			{items.length > 0 ? project_list_template : loading_template}
			<button onClick={handleClick}>{buttonText}</button>		
		</div>
	)
	return template
}

export default ProjectList