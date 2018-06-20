import React, { Component }from 'react'
import queryString from 'query-string'

import Modal from 'material-ui/Modal'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

import yellow from 'material-ui/colors/yellow'
import grey from 'material-ui/colors/grey'

import { withStyles } from 'material-ui/styles'

import Item from './Item'
import FormWrapper from '../containers/FormWrapper'
import JSONFormWrapper from '../containers/JSONFormWrapper'

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
	},
    meta_btn: {
        bottom: '15%',
        right: '5%',
        position: 'fixed',
        backgroundColor: yellow[500],
        color: grey[800],
        '&:hover': {
            backgroundColor: yellow[600],
        }
    },
    code_icon_root: {
        width: 'inherit'
    }
})

class ItemList extends Component{
    state = {
        formType: 'crud',
        isModalOpen: false
    }
	
	componentWillMount(){
        this.props.items.length === 0 && this.props.fetchItems()
    }
	
	handleOpen = (source = 'crud') => {
        const {
            itemInEdit,
            cancelItemEdit
        } = this.props

        this.setState({ isModalOpen: true, formType: source })

        if(source === 'crud' && itemInEdit.length > 0 ){ cancelItemEdit() }
    }
	
	handleClose = () => this.setState({ isModalOpen: false })

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
            schema,
            itemType,
            itemInEdit,
            items,
            initEditMode,
            deleteItem,
            loading,
            ...other
        } = this.props

        const {
            isModalOpen,
            formType
        } = this.state

        const filteredItems = this.filterItems(items, location.search)

        const loadingBar =  <CircularProgress className={ classes.progress }
                                size={100} thickness={2}/>

        const editSchemaBtn = <Button variant='fab' className={classes.meta_btn}
                                onClick={ () => this.handleOpen('meta') }>
                                    <Icon className='fas fa-code' classes={{
                                        root: classes.code_icon_root
                                    }}></Icon>
                            </Button>

        const crudForm = <FormWrapper formData={ itemInEdit } dataShape={ schema } 
                            dataType={ itemType } { ...other }/>

        const metaForm = <JSONFormWrapper data={ schema } />

		return (
            <div className={ classes.root }>
                { loading && loadingBar }
                <Grid container spacing={0}>
                    {filteredItems.map((entry, _idx) => (
                        <Grid key={ _idx } className={ classes.item } item xs>
                            <Item { ...other } type={ itemType } data={ entry }
                                handleEdit={ id => initEditMode(id) && this.handleOpen() }
                                handleDelete={ id => deleteItem(id) }/>
                        </Grid>
                    ))}
                </Grid>
                { itemType === 'train_job' && editSchemaBtn }
                <Button variant='fab' color="primary" className={classes.add_btn}
                    onClick={ () => this.handleOpen() }
                    disabled={ itemType === 'evaluation' }>
                    <Icon> add </Icon>
                </Button>
                <Modal open={ isModalOpen } close={ () => this.handleClose() }>
                    { formType === 'crud' ? crudForm : metaForm }
				</Modal>	
			</div>
		)
    }
}

export default withStyles(styles)(ItemList)
