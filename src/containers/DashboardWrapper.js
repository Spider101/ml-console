import { connect } from 'react-redux'

import * as evaluation from '../actions/evaluationActions'
import PerformanceDash from '../components/PerformanceDash'

const mapStateToProps = state => ({ ...state.evaluations })

const mapDispatchToProps = dispatch => ({
    fetchEvalLogs: evalId => dispatch(evaluation.fetch_eval_logs(evalId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformanceDash)
