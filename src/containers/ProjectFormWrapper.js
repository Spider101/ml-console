import React, { Component } from 'react'
import faker from 'faker'
import flatten from 'flat'

import ProjectForm from '../components/ProjectForm'

class ProjectFormWrapper extends Component{
    state = {
        isValid: false,
        form: {}
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
        let schema_clone = { ...nextProps.schema }
		const schema_keys = Object.keys(schema_clone),
			  form_keys = Object.keys(prevState.form)
		
		if(schema_keys.length > 0){
			if(nextProps.formData.length > 0){
				const formData = flatten(nextProps.formData[0])
				for(const key in schema_clone){
					schema_clone[key].value = formData[key]
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
		let form_clone = { ...this.state.form }
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
    
    handleFormClear = () => {
		let form_clone = { ...this.state.form }
		for(const key in form_clone){
			form_clone[key].value = ''
		}
		this.setState({ form: form_clone, isValid: false })	
	}
	
	handleFormSubmit = () => {
        if(this.state.isValid){
            const {
                formData,
                updateItem,
                addItem
            } = this.props
            let form_data = {}

            for(let key in this.state.form){
               form_data[key] = this.state.form[key].value
            }
            form_data = flatten.unflatten(form_data)
            
			if(formData.length > 0){
                updateItem(form_data)
			} else {
				form_data['id'] = faker.random.uuid()
				addItem(form_data)
			}
        }
    }
    
	render(){
        const {
            formData,
            dataType
        } = this.props

        const formHeading = `${ formData.length > 0 ? 'Edit' : 'Add' } 
            ${ dataType === 'project' ? 'Project': 'Train Job' }`
		
        return (
			<ProjectForm { ...this.state } 
				heading={ formHeading }
				handleClear={ this.handleFormClear }
				handleSubmit={ this.handleFormSubmit }
				handleChange={ this.handleInputChange }/>
		)
		
    }
}

export default ProjectFormWrapper
