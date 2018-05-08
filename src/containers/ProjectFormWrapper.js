import React, { Component } from 'react'
import { connect } from 'react-redux'
import faker from 'faker'
import ProjectForm from '../components/ProjectForm'
import * as project from '../actions/projectActions'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    addProject: newProject => dispatch(project.add_project(newProject)),
    updateProject: editedProject => dispatch(project.update_project(editedProject))
})

class ProjectFormWrapper extends Component{
    constructor(){
        super()
        this.state = {
            isValid: false,
			form: {}
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
        let schema_clone = {...nextProps.schema}
		const schema_keys = Object.keys(schema_clone),
			  form_keys = Object.keys(prevState.form)
		
		if(schema_keys.length > 0){
			if(nextProps.itemInEdit.length > 0){
				const itemInEdit = nextProps.itemInEdit[0]
				for(const key in schema_clone){
					schema_clone[key].value = itemInEdit[key]
				}
				return { form: schema_clone, isValid: true }
			} else if(form_keys.length === 0){
				for(const key in schema_clone){
					schema_clone[key].value = ''
				}
				return { form: schema_clone }
			}
			return null
        } else{
            return null
        }
    }
    
    handleInputChange = (evt) => {
		let form_clone = {...this.state.form}
        form_clone[evt.target.id] = { 
			...form_clone[evt.target.id],
			value: evt.target.value 
		}
        this.setState({
            form: form_clone,
            isValid: this.validateForm(form_clone)
        })
    }

	validateForm = (form_state) => {
		for(let key in form_state){
            const field = form_state[key]
            if(field.type !== 'hidden' && (field.value == null || field.value.length === 0)){
                return false
            }
        }
        return true
    }
    
    handleFormCancel = () => {
		let form_clone = { ...this.state.form }
		for(const key in form_clone){
			form_clone[key].value = ''
		}
		this.setState({ form: form_clone, isValid: false })	
	}
	
	handleFormSubmit = () => {
        if(this.state.isValid){
            let form_data = {}
            for(let key in this.state.form){
               form_data[key] = this.state.form[key].value
            }
            
			if(this.props.itemInEdit.length > 0){
				this.props.updateProject(form_data)
			} else {
				form_data['id'] = faker.random.uuid()
				this.props.addProject(form_data)
			}
        }
    }
    
	render(){
		return (
			<ProjectForm { ...this.state } 
				heading={this.props.headerText}
				handleCancel={ this.handleFormCancel }
				handleSubmit={ this.handleFormSubmit }
				handleChange={ this.handleInputChange }/>
		)
		
    }
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(ProjectFormWrapper)