import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
// import App from './App';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import  store  from './store'
// import { fetch_projects } from './actions/projectActions'

ReactDOM.render(
    <Provider store={store}>
    	<Layout />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
