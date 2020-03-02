import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './LoginForm';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LoginForm />, document.getElementById('LoginForm'));
serviceWorker.unregister();