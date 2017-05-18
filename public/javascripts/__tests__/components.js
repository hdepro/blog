/**
 * Created by heben on 2017/5/13.
 */

import React from 'react'
import {shallow,render,mount} from 'enzyme'
import {Header} from '../admin/components/Editor'

test('Enzyme Mount', function () {
        const doneChange = jest.fn();
        let header = mount(<Header click={doneChange}/>);
        let button = header.find("button").at(2);
        button.simulate("click");
        expect(doneChange).toBeCalledWith("###");
});