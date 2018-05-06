import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ items, handleClick, buttonText }) => {
	const project_list_template = (
		<div>
			<h3> Projects </h3>
			<ul>
				{
					items.map(
						item => <Project key={item.id}
								{...item} />
					)
				}
			</ul>
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