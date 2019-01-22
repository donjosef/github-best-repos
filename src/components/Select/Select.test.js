import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './Select';

configure({ adapter: new Adapter() });

describe('<Select />', () => {
    it('should have as many options as the length of optValues array', () => {
        const wrapper = shallow(<Select optValues={['test1', 'test2']}/>);
        expect(wrapper.find('option')).toHaveLength(2);
    });

    it('should have a label if receives label prop', () => {
        const wrapper = shallow(<Select optValues={[]} label="test" />);
        expect(wrapper.find('.controls-wrapper__label')).toHaveLength(1);
    });

    it('should not have a label if it doesnt receive label prop', () => {
        const wrapper = shallow(<Select optValues={[]} />);
        expect(wrapper.find('label')).toHaveLength(0);
    });

})