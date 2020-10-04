import React from 'react';
import ReactDOM from 'react-dom';
// init
import './index.css';
import 'antd/dist/antd.css';
import './index.css';
import './App.css'
// Router, Redux
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
