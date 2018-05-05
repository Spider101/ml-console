import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import ProjectFormWrapper from './ProjectFormWrapper'
import * as project from '../actions/projectActions'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    fetchProjects : () => dispatch(project.fetch_projects()),
})

class ProjectListWrapper extends Component{
	componentWillMount(){
        this.props.fetchProjects()
    }
   	render(){
		return (
            <div>
				<ProjectList {...this.props}/>
				<ProjectFormWrapper/>
			</div>
		)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListWrapper)