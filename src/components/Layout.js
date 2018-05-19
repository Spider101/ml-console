import React from 'react'
import { Route } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Drawer from 'material-ui/Drawer'

import { withStyles } from 'material-ui/styles'

import ProjectListWrapper from '../containers/ProjectListWrapper'
import TrainJobsListWrapper from '../containers/TrainJobsListWrapper'
import Sidebar from '../components/Sidebar'

const drawerWidth = 240

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
    toolbar: theme.mixins.toolbar
})

const Layout = props => { 
    const { classes } = props

    return (
        <div className={ classes.root }> 
            <AppBar position='absolute' className={ classes.appBar }>
                <Toolbar>
                    <Typography variant="title" color="inherit"> 
                        Machine Learning Console 
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent'
                classes={{ paper: classes.drawerPaper }}>
                <div className={ classes.toolbar } />
                <Sidebar />
            </Drawer>
            <main className={ classes.content }>
                <div className={ classes.toolbar } />
                <Route exact path='/' component={ ProjectListWrapper } />
                <Route path='/train_jobs' component={ TrainJobsListWrapper } />
            </main>
        </div>
    )
}

export default withStyles(styles)(Layout)
