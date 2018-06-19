import { connect } from 'react-redux'

import * as evaluation from '../actions/evaluationActions'
import ItemList from '../components/ItemList'

const mapStateToProps = state => ({ ...state.evaluations, itemType: 'evaluation' })

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(evaluation.fetch_evaluations()),
    addItem: newItem => dispatch(evaluation.add_evaluation(newItem)),
	initEditMode: id => dispatch(evaluation.init_edit_mode(id)),
    cancelItemEdit: () => dispatch(evaluation.cancel_evaluation_edit()),
    updateItem: editedItem => dispatch(evaluation.update_evaluation(editedItem)),
	deleteItem: id => dispatch(evaluation.delete_evaluation(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)
