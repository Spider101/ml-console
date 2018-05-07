import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import ProjectFormWrapper from './ProjectFormWrapper'
import * as project from '../actions/projectActions'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    fetchProjects : () => dispatch(project.fetch_projects()),
	initEditMode: id => dispatch(project.init_edit_mode(id)),
	deleteProject: id => dispatch(project.delete_project(id))
})

class ProjectListWrapper extends Component{
	constructor(){
		super()
		this.state = {
			isFormVisible: false
		}
	}
	
	componentWillMount(){
        this.props.fetchProjects()
    }
	
	toggleFormVisibility = () => {
		this.setState({
			isFormVisible: !this.state.isFormVisible
		})
	}
	
	prepEditForm = id =>{
		this.props.initEditMode(id)
		this.setState({
			isFormVisible: true
		})
	}
	
   	render(){
		const addButtonText = this.state.isFormVisible ? "Close" : "Add Project"
		const formHeading = this.props.itemInEdit.length > 0 ? "Edit" : "Add"
		return (
            <div>
				<ProjectList { ...this.props }
					handleClick={ () => this.toggleFormVisibility() }
					handleEdit={ id => this.prepEditForm(id) }
					handleDelete={ id => this.props.deleteProject(id) }
					buttonText={ addButtonText }/>
				<ProjectFormWrapper headerText={ `${formHeading} Project` }
					isHidden={ this.state.isFormVisible }/>
			</div>
		)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListWrapper)