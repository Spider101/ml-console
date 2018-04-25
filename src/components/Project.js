import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ name, gh_url, descr }) => (
	<li>
    	<h3>
        	<a href={gh_url}>{name}</a>
        </h3>
        <p>{descr}</p>
    </li>
)

export default Project