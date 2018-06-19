import { connect } from 'react-redux'

import * as project from '../actions/projectActions'
import ItemList from '../components/ItemList'

const mapStateToProps = state => ({ ...state.projects, itemType: 'project' })

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(project.fetch_projects()),
    addItem: newItem => dispatch(project.add_project(newItem)),
	initEditMode: id => dispatch(project.init_edit_mode(id)),
    cancelItemEdit: () => dispatch(project.cancel_project_edit()),
    updateItem: editedItem => dispatch(project.update_project(editedItem)),
	deleteItem: id => dispatch(project.delete_project(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)
