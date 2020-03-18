import React from 'react';
import { Button } from '@salesforce/design-system-react';

import GlobalHeader from './components';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <GlobalHeader userName="My Username" />
      <div className="slds-m-top_xx-large slds-p-top_xx-large">
        <div className="slds-x-small-buttons_horizontal slds-align_absolute-center">
          <Button label="Base" variant="base" />
          <Button label="New Subscription" />
          <Button iconCategory="utility" iconName="download" iconPosition="left" label="Neutral Icon" />
          <Button label="Responsive" variant="brand" responsive />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
