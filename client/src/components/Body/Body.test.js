import React from 'react';
import ReactDOM from "react-dom";
import Body from './Body';

describe('(Component) Body', () => {
  it('should render successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});