import React from 'react'
import Project from './Project'
import TrainJob from './TrainJob'
import Evaluation from './Evaluation'

export default props => {
    switch(props.itemType){
        case 'project':
            return <Project { ...props } />
        case 'train_job':
            return <TrainJob { ...props } />
        case 'evaluation':
            return <Evaluation { ...props } />
        default:
            return <Project { ...props } />
    }
}
