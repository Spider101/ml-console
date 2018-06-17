import React, { Component }from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import Modal from 'material-ui/Modal'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

import { withStyles } from 'material-ui/styles'

import Item from './Item'
import ProjectFormWrapper from '../containers/ProjectFormWrapper'

const styles = theme => ({
    root:{
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3
    },
    progress:{
        position: 'absolute',
        top: '45%',
        left: '50%'
    },
    item: {
        flexGrow: 0
    },
	add_btn: {
		bottom: '5%',
		right: '5%',
		position: 'fixed'
	}
})

class ProjectList extends Component{
    state = {
        isModalOpen: false
    }
	
	componentWillMount(){
        this.props.items.length === 0 && this.props.fetchItems()
    }
	
	handleOpen = () => {
        const {
            itemInEdit,
            cancelItemEdit
        } = this.props

        this.setState({ isModalOpen: true })

        if(itemInEdit.length > 0 ){ cancelItemEdit() }
    }
	
	handleClose = () => this.setState({ isModalOpen: false })

	prepEditForm = id => {
		this.props.initEditMode(id)
		this.handleOpen()
	}
	
    filterItems = (items, searchString) => {
        const query = queryString.parse(searchString)
        if(Object.keys(query).length > 0){
            const queryKey = Object.keys(query)[0] 
            const itemKey = queryKey === 'projectId' ? 'project_id' : 'job_id' 
            return [ ...items ].filter(item => item[`${itemKey}`] === query[`${queryKey}`])
        } else{
            return items
        }
    }

   	render(){
        const {
            classes,
            location,
            itemType,
            itemInEdit,
            items,
            deleteItem,
            loading,
            ...other
        } = this.props

        const filteredItems = this.filterItems(items, location.search)

        const loadingBar =  <CircularProgress className={ classes.progress }
                                size={100} thickness={2}/>
		return (
            <div className={ classes.root }>
                { loading && loadingBar }
                <Grid container spacing={0}>
                    {filteredItems.map((entry, _idx) => (
                        <Grid key={ _idx } className={ classes.item } item xs>
                            <Item { ...other } type={ itemType } data={ entry }
                                handleEdit={ id => this.prepEditForm(id) }
                                handleDelete={ id => deleteItem(id) }/>
                        </Grid>
                    ))}
                </Grid>
                <Button variant='fab' color="primary" className={classes.add_btn}
                    aria-label="add" onClick={ () => this.handleOpen() }
                    disabled={ itemType === 'evaluation' }>
                    <Icon> add </Icon>
                </Button>
				<Modal open={ this.state.isModalOpen }
					onClose={ () => this.handleClose() }>
					<ProjectFormWrapper formData={ itemInEdit }  
                        dataType={ itemType } { ...other }/>
				</Modal>	
			</div>
		)
    }
}

export default withStyles(styles)(ProjectList)
