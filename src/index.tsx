import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/css/index.css';
// import App from './App';
import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker';

initializeIcons();
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
