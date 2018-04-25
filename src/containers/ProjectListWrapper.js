import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import { fetch_projects } from '../actions/projectActions'

const mapStateToProps = state => ({ ...state.projects })

const mapDispatchToProps = dispatch => ({
    fetchProjects : () => dispatch(fetch_projects())
})

class ProjectListWrapper extends Component{
    componentWillMount(){
        this.props.fetchProjects()
    }
    
    render(){
        return <ProjectList {...this.props}/>
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListWrapper)