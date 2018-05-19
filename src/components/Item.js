import React from 'react'
import Project from './Project'
import TrainJob from './TrainJob'

export default props => {
    switch(props.itemType){
        case 'project':
            return <Project { ...props } />
        case 'train_job':
            return <TrainJob { ...props } />
        default:
            return <Project { ...props } />
    }
}
