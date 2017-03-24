/* globals jest */

jest.mock('react-dom');
import Root from '../components/root';

describe('entry', () => {
  let Entry, ReactDOM, Root, renderedRoot;

  beforeAll(() => {
    document.addEventListener = jest.fn();

    ReactDOM = require('react-dom');
    ReactDOM.render = jest.fn();

    Root = require('../components/root');
    Entry = require('../expense_tracker');

    document.addEventListener.mock.calls[0][1]();
    renderedRoot = ReactDOM.render.mock.calls[0][0];
  });

  it('adds the DOMContentLoaded event', () => {
    const eventListenerCalls = document.addEventListener.mock.calls;

    expect(document.addEventListener).toBeCalled();
    expect(eventListenerCalls[0][0]).toEqual('DOMContentLoaded');
  });

  it('renders the Root component', () => {
    expect(renderedRoot.type).toEqual(Root.default);
  });

  it('passes the store as a prop to Root', () => {
    expect(renderedRoot.props.store).not.toBeUndefined();
  });

});
