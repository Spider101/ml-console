import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ projects, fetched, fetching ,err }) => {
	const project_list_template = (
		<div>
			<h3> Projects </h3>
			<ul>
				{projects.map(project =>
					<Project key={project._id}
						{...project} />
				 )}
			</ul>
		</div>
	)
	const loading_template = <h3>Loading Projects ..</h3>
	return projects.length > 0 ? project_list_template : loading_template
}

export default ProjectList