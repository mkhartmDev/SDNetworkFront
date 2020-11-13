import React from 'react';
import {shallow,mount,render} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Landing from '../components/PublicPages/Landing/Landing';
import {MemoryRouter, Router}  from 'react-router-dom';
import CreateAnAccountPage from '../components/PublicPages/CreateAnAccountPage/CreateAnAccountPage';
import SettingsPage from '../components/PrivatePages/SettingsPage/SettingsPage';
import { createStore } from 'redux';
import reducer from '../reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';




Enzyme.configure({adapter:new Adapter()})

const settingStore = createStore(reducer,  composeWithDevTools());



test('render the landing page', () => {
  const component =render(<Provider store = {settingStore}><MemoryRouter initialEntries={[ '/' ]}>
    <SettingsPage />
    </MemoryRouter></Provider>)
    expect(component).toMatchSnapshot();
});