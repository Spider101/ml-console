import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import ProjectFormWrapper from './ProjectFormWrapper'
import * as project from '../actions/projectActions'

import Modal from 'material-ui/Modal'

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
			isModalOpen: false
		}
	}
	
	componentWillMount(){
        this.props.fetchProjects()
    }
	
	handleOpen = () => {
		this.setState({ isModalOpen: true })
	}
	
	handleClose = () => {
		this.setState({ isModalOpen: false })
	}
	
	prepEditForm = id =>{
		this.props.initEditMode(id)
		this.handleOpen()
	}
	
   	render(){
		const formHeading = this.props.itemInEdit.length > 0 ? "Edit" : "Add"
		return (
            <div>
				<ProjectList { ...this.props }
					handleClick={ () => this.handleOpen() }
					handleEdit={ id => this.prepEditForm(id) }
					handleDelete={ id => this.props.deleteProject(id) }/>
				<Modal open={ this.state.isModalOpen }
					onClose={ () => this.handleClose() }>
					<ProjectFormWrapper 
						headerText={ `${formHeading} Project` }/>
				</Modal>	
			</div>
		)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListWrapper)