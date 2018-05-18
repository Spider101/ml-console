import React, { Component }from 'react'
import PropTypes from 'prop-types'

import Modal from 'material-ui/Modal'
import { LinearProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import grey from 'material-ui/colors/grey'

import { withStyles } from 'material-ui/styles'

import Item from './Item'
import ProjectFormWrapper from '../containers/ProjectFormWrapper'

const styles = theme => ({
    colorPrimary: {
        backgroundColor: grey[300]
    },
    barColorPrimary: {
        backgroundColor: grey[900]
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
        this.props.fetchItems()
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

	prepEditForm = id =>{
		this.props.initEditMode(id)
		this.handleOpen()
	}
	
   	render(){
        const {
            classes,
            itemInEdit,
            items,
            deleteItem,
            loading,
            ...other
        } = this.props
		
        const formHeading = `${itemInEdit.length > 0 ? 'Edit' : 'Add'} Project`
        
        const loadingBar =  <LinearProgress classes={{ 
                                colorPrimary: classes.colorPrimary,
                                barColorPrimary: classes.barColorPrimary
                            }} />
		return (
            <div>
                { loading && loadingBar }
                <Grid container spacing={0}>
                    {items.map((entry, _idx) => (
                        <Grid key={ _idx } className={ classes.item } item xs>
                            <Item { ...other } data={entry}
                                handleEdit={ id => this.prepEditForm(id) }
                                handleDelete={ id => deleteItem(id) }/>
                        </Grid>
                    ))}
                </Grid>
                <Button variant='fab' color="primary" className={classes.add_btn}
                    aria-label="add" onClick={ () => this.handleOpen() }>
                    <Icon> add </Icon>
                </Button>
				<Modal open={ this.state.isModalOpen }
					onClose={ () => this.handleClose() }>
					<ProjectFormWrapper { ...this.props } 
						headerText={ formHeading }/>
				</Modal>	
			</div>
		)
    }
}

export default withStyles(styles)(ProjectList)
