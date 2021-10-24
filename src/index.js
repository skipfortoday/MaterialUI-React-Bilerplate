import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);
serviceWorker.reregister();
