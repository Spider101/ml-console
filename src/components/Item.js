import React from 'react'
import Project from './Project'

export default props => {
    switch(props.itemType){
        case 'project':
            return <Project { ...props } />
        default:
            return <Project { ...props } />
    }
}
