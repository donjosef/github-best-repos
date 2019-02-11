import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListResults from './ListResults';

configure({ adapter: new Adapter() });

describe('<ListResults />', () => {
    it('should render as many results as results prop', () => {
        const wrapper = shallow(<ListResults results={[{owner: {}}]}/>);
        expect(wrapper.find('li')).toHaveLength(1);
    });
});