import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';

global.React = React;
global.Router = Router;
global.expect = expect;
global.Adapter = Adapter;
global.Enzyme = Enzyme;
global.mount = mount;
global.shallow = shallow;

