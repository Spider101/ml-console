import React, { Component } from 'react'
import { connect } from 'react-redux'
import faker from 'faker'
import ProjectForm from '../components/ProjectForm'
import * as project from '../actions/projectActions'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    addProject: newProject => dispatch(project.add_project(newProject))
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
		if(Object.keys(schema_clone).length > 0 ){
            
            for(let key in schema_clone){
                if(!schema_clone[key].hasOwnProperty('value')){
				   schema_clone[key].value = ''
				}
            }    
            
            return { form: schema_clone }
        } else{
            return null
        }
    }
    
    handleInputChange = (evt) => {
        let form_clone = {...this.state.form}
        form_clone[evt.target.name] = { 
			...form_clone[evt.target.name],
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
    
    handleFormSubmit = (evt) => {
        evt.preventDefault()
        if(this.state.isValid){
            const form_data = {}
            for(let key in this.state.form){
               form_data[key] = this.state.form[key].value
            }
			form_data['id'] = faker.random.uuid()
            this.props.addProject(form_data)
        }
    }
    
    render(){
		const form_component = <ProjectForm { ...this.state }
								handleSubmit={ this.handleFormSubmit }
								handleChange={ this.handleInputChange }/>
        return this.props.isHidden && form_component
		
    }
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(ProjectFormWrapper)