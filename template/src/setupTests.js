// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Jest uses jsdom as a pseudo DOM, but it doesn’t include the canvas straight away.
// Must add in canvas support so jsdom can find it.
// React for SLDS components need it for testing.
import 'jest-canvas-mock';

// Mock console to ignore warn and error thrown by React
global.console = {
  log: console.log,
};

beforeEach(() => {
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
});

// Fix the issue caused by testing the popover component.
// Known issue by popper js (https://github.com/popperjs/popper-core/issues/478)
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
