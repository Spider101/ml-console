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
	
   	render(){
		const addButtonText = this.state.isFormVisible ? "Close" : "Add Project"
		return (
            <div>
				<ProjectList { ...this.props }
					handleClick={ () => this.toggleFormVisibility() }
					buttonText={ addButtonText }/>
				<ProjectFormWrapper isHidden={ this.state.isFormVisible }/>
			</div>
		)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListWrapper)