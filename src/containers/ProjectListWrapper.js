import { connect } from 'react-redux'

import * as project from '../actions/projectActions'
import ProjectList from '../components/ProjectList'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(project.fetch_projects()),
    addProject: newItem => dispatch(project.add_project(newItem)),
	initEditMode: id => dispatch(project.init_edit_mode(id)),
    cancelItemEdit: () => dispatch(project.cancel_project_edit()),
    updateProject: editedItem => dispatch(project.update_project(editedItem)),
	deleteProject: id => dispatch(project.delete_project(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
