import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './apps/App';
import { IconSettings } from '@salesforce/design-system-react';

ReactDOM.render(
  <IconSettings iconPath="/assets/icons">
    <App />
  </IconSettings>,
  document.getElementById('root')
);
