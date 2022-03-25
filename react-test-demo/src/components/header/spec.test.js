import React from "react";
import Header from "./index";
import {shallow} from 'enzyme';


describe('Header Component', () => {
    it('It should render without errors' , () => {
        const component = shallow(<Header />);
        console.log(component.debug);
        const wrapper = component.find(".headerComponent");
        expect(wrapper.length).toBe(2);
    }) ; 
})



// if you have en empty test case it will pass by default
// nvm install -g npm@version