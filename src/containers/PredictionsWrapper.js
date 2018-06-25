import { connect } from 'react-redux'

import * as evaluation from '../actions/evaluationActions'
import PredsGallery from '../components/PredsGallery'

const mapStateToProps = state => ({ ...state.evaluations })

const mapDispatchToProps = dispatch => ({
    fetchEvalPreds: evalId => dispatch(evaluation.fetch_eval_preds(evalId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PredsGallery)
