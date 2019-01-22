import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Watcher from './Watcher';

configure({adapter: new Adapter()});

describe('<Watcher />', () => {
    it('should have an avatar with src equal to avatar prop', () => {
        const wrapper = shallow(<Watcher avatar="test"/>);
        expect(wrapper.contains(<img src="test" />)).toEqual(true);
    });
})