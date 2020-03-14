import React from 'react';

import {
  GlobalHeader,
  GlobalHeaderSearch,
  Combobox,
  GlobalHeaderHelp,
  Popover,
  GlobalHeaderSetup,
  GlobalHeaderProfile,
  GlobalHeaderNotifications,
  MenuDropdown,
  Button,
} from '@salesforce/design-system-react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <GlobalHeader logoSrc="/assets/images/global-header/logo.svg">
        <GlobalHeaderSearch
          combobox={
            <Combobox
              assistiveText={{ label: 'Search' }}
              labels={{ placeholder: 'Search' }}
              options={[
                { id: 'item1', label: 'item1' },
                { id: 'item2', label: 'item2' },
              ]}
            />
          }
        />
        <GlobalHeaderHelp
          popover={
            <Popover
              ariaLabelledby="help-heading"
              body={
                <div>
                  <h2 className="slds-text-heading_small" id="help-heading">
                    Help and Training
                  </h2>
                </div>
              }
            />
          }
        />
        <GlobalHeaderSetup
          dropdown={
            <MenuDropdown
              options={[
                { id: 'setupOptionOne', label: 'Setup Option One' },
                { id: 'setupOptionTwo', label: 'Setup Option Two' },
              ]}
            />
          }
        />
        <GlobalHeaderNotifications
          notificationCount={5}
          popover={<Popover ariaLabelledby="header-notifications-custom-popover-content" />}
        />
        <GlobalHeaderProfile popover={<Popover />} userName="J.C. Zhang" />
      </GlobalHeader>
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
