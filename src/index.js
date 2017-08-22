import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/configureStore';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/common/navbar';
import Sidebar from './components/common/sidebar';
import Routes from './routes';

injectTapEventPlugin();

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className='App'>
                <Sidebar>
                    <Navbar />
                    <Routes />
                </Sidebar>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
