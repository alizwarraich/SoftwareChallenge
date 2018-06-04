import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Body from './components/Search';
import Header from './components/Header';


describe('(Component) App', () => {
  it('contains one Header and one Search', () => {
    const app = shallow(<App/>);
    expect(app.find(Body).length).to.equal(1);
    expect(app.find(Header).length).to.equal(1);
  });
});
