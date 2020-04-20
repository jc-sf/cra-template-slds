import React from 'react';
import PropTypes from 'prop-types';

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
} from '@salesforce/design-system-react';

const Header = ({ userName }) => {
  return (
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
              <div data-testid="help-heading">
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
      <GlobalHeaderProfile popover={<Popover />} userName={userName} />
    </GlobalHeader>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
