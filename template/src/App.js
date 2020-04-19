import React from 'react';
import { Button } from '@salesforce/design-system-react';

import Header from './components/Header';
import './App.scss';

const App = () => {
  return (
    <div className="App" data-testid="app">
      <Header userName="My Username" />
      <div className="slds-m-top_xx-large slds-p-top_xx-large">
        <div className="slds-x-small-buttons_horizontal slds-align_absolute-center">
          <Button label="Brand" variant="brand" />
          <Button label="Disabled" variant="brand" disabled />
          <Button iconCategory="utility" iconName="download" iconPosition="left" label="Neutral Icon" />
          <Button label="Destructive" variant="destructive" />
          <Button label="Outline Brand" variant="outline-brand" />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
