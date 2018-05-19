import { connect } from 'react-redux'

import * as trainJob from '../actions/trainJobActions'
import ProjectList from '../components/ProjectList'

const mapStateToProps = state => ({ ...state.train_jobs, itemType: 'train_job' })

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(trainJob.fetch_train_jobs()),
    addItem: newItem => dispatch(trainJob.add_train_job(newItem)),
	initEditMode: id => dispatch(trainJob.init_edit_mode(id)),
    cancelItemEdit: () => dispatch(trainJob.cancel_train_job_edit()),
    updateItem: editedItem => dispatch(trainJob.update_train_job(editedItem)),
	deleteItem: id => dispatch(trainJob.delete_train_job(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
