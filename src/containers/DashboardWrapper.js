import { connect } from 'react-redux'

import * as evaluation from '../actions/evaluationActions'
import PerformanceDash from '../components/PerformanceDash'

const mapStateToProps = state => ({ ...state.evaluations })

const mapDispatchToProps = dispatch => ({
    fetchEval: evalId => dispatch(evaluation.fetch_evaluation(evalId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformanceDash)
